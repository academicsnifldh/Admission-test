// =========================
// VARIABLES
// =========================
let currentIndex = 0;
let answers = [];
let timer;
let timeLeft = 60 * 60;
let warningCount = 0;
let testSubmitted = false;

// =========================
// ADMIN LOGIN
// =========================
function adminLogin() {
  let email = document.getElementById("adminEmail").value;
  let password = document.getElementById("adminPassword").value;

  if (email === "admin@nifldh.com" && password === "admin@ldhnif") {
    document.getElementById("admin-box").style.display = "none";
    document.getElementById("rules-box").style.display = "block";
  } else {
    alert("Invalid admin credentials");
  }
}

// =========================
// RULES
// =========================
function toggleRules() {
  document.getElementById("rulesNextBtn").disabled =
    !document.getElementById("rulesCheck").checked;
}

function goToLogin() {
  document.getElementById("rules-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
}

// =========================
// ANTI-CHEAT
// =========================
document.addEventListener("visibilitychange", function () {
  if (document.hidden && !testSubmitted) {
    warningCount++;

    if (warningCount === 1) {
      alert("Warning: Do not switch tabs. Next time test will be submitted.");
    } else {
      alert("Test submitted due to cheating.");
      submitTest();
    }
  }
});

// =========================
// SHUFFLE
// =========================
function shuffle(arr) {
  let copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

// =========================
// GENERATE QUESTIONS
// =========================
function generateQuestions() {

  let A = shuffle(questionSections.A).slice(0, 10).map(q => ({...q, section: "A"}));
  let B = shuffle(questionSections.B).slice(0, 10).map(q => ({...q, section: "B"}));
  let C = shuffle(questionSections.C).slice(0, 15).map(q => ({...q, section: "C"}));
  let D = shuffle(questionSections.D).slice(0, 15).map(q => ({...q, section: "D"}));
  let E = questionSections.E.map(q => ({...q, section: "E"}));

  return [...A, ...B, ...C, ...D, ...E];
}

let selectedQuestions = generateQuestions();

// =========================
// START TEST
// =========================
function startTest() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (!name || !email || phone.length !== 10 || isNaN(phone)) {
    alert("Please enter valid details");
    return;
  }

  document.getElementById("logo").classList.add("logo-top-left");

  document.getElementById("login-box").style.display = "none";
  document.getElementById("test-box").style.display = "block";

  loadQuestion();

  timer = setInterval(function () {

    if (testSubmitted) return;

    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;

    document.getElementById("timer").innerText =
      m + ":" + (s < 10 ? "0" + s : s);

    timeLeft--;

    if (timeLeft < 0) {
      submitTest();
    }

  }, 1000);
}

// =========================
// LOAD QUESTION
// =========================
function loadQuestion() {

  if (testSubmitted) return;

  let q = selectedQuestions[currentIndex];

  document.getElementById("section").innerText = "Section " + q.section;
  document.getElementById("question-box").innerText =
    "Q" + (currentIndex + 1) + ". " + q.q;
  document.getElementById("progress").innerText =
    (currentIndex + 1) + " / 60";

  let html = "";

  q.o.forEach(function(opt) {
    html += `
    <div class="option" onclick="selectOption(this)">
      <input type="radio" name="opt" value="${opt}">
      ${opt}
    </div>`;
  });

  document.getElementById("options-box").innerHTML = html;
}

// =========================
// SELECT OPTION
// =========================
function selectOption(el) {

  if (testSubmitted) return;

  document.querySelectorAll(".option").forEach(function(o){
    o.classList.remove("selected");
  });

  el.classList.add("selected");
  el.querySelector("input").checked = true;
}

// =========================
// NEXT QUESTION
// =========================
function nextQuestion() {

  if (testSubmitted) return;

  let selected = document.querySelector('input[name="opt"]:checked');

  if (!selected) {
    alert("Select an option");
    return;
  }

  answers[currentIndex] = selected.value;
  currentIndex++;

  if (currentIndex < selectedQuestions.length) {
    loadQuestion();
  } else {
    submitTest();
  }
}

// =========================
// SUBMIT TEST
// =========================
function submitTest() {

  if (testSubmitted) return;
  testSubmitted = true;

  clearInterval(timer);

  let sectionScores = { A:0, B:0, C:0, D:0, E:0 };
  let total = 0;

  selectedQuestions.forEach((q, i) => {
    if (answers[i] === q.a) {
      sectionScores[q.section]++;
      total++;
    }
  });

  // 🔥 SEND DATA TO GOOGLE SHEETS
  fetch("https://script.google.com/macros/s/AKfycbz5VxXN0KtGyLW7sYznbSXXIqc8U1omTjejdpB8cgxuLOFDsGVRfvcRp47CtQC3DvwS/exec", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,

      sectionA: sectionScores.A,
      sectionB: sectionScores.B,
      sectionC: sectionScores.C,
      sectionD: sectionScores.D,
      sectionE: sectionScores.E,

      total: total
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(data => console.log("RESPONSE:", data))
  .catch(err => console.log("ERROR:", err));

  // FINAL SCREEN
  document.body.innerHTML = `
    <img src="logo.png" style="display:block;margin:20px auto;max-width:120px;">
    <h1>Test Completed</h1>
    <p>Thank you. Your response has been registered.<br>
    Please contact the administrator for the next steps.</p>
  `;
}
}
