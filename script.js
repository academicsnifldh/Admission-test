let currentIndex = 0;
let answers = [];
let selectedQuestions = [];
let timer;
let timeLeft = 60 * 60;
let warningCount = 0;
let testSubmitted = false;

function adminLogin() {
  let email = document.getElementById("adminEmail").value;
  let password = document.getElementById("adminPassword").value;

  if (email === "admin@nifldh.com" && password === "admin@ldhnif") {
    document.getElementById("admin-box").style.display = "none";
    document.getElementById("rules-box").style.display = "block";
  } else {
    alert("Invalid credentials");
  }
}

function toggleRules() {
  document.getElementById("rulesNextBtn").disabled =
    !document.getElementById("rulesCheck").checked;
}

function goToLogin() {
  document.getElementById("rules-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden && !testSubmitted) {
    warningCount++;
    if (warningCount === 1) {
      alert("Warning: Do not switch tabs.");
    } else {
      alert("Test submitted due to cheating.");
      submitTest();
    }
  }
});

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function generateQuestions() {
  let A = shuffle(questionSections.A).slice(0,10).map(q=>({...q,section:"A"}));
  let B = shuffle(questionSections.B).slice(0,10).map(q=>({...q,section:"B"}));
  let C = shuffle(questionSections.C).slice(0,15).map(q=>({...q,section:"C"}));
  let D = shuffle(questionSections.D).slice(0,15).map(q=>({...q,section:"D"}));
  let E = questionSections.E.map(q=>({...q,section:"E"}));
  return [...A,...B,...C,...D,...E];
}

function startTest() {
  selectedQuestions = generateQuestions();

  document.getElementById("logo").classList.add("logo-top-left");

  document.getElementById("login-box").style.display = "none";
  document.getElementById("test-box").style.display = "block";

  loadQuestion();

  timer = setInterval(() => {
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    document.getElementById("timer").innerText =
      m + ":" + (s < 10 ? "0" + s : s);
    timeLeft--;
    if (timeLeft < 0) submitTest();
  }, 1000);
}

function loadQuestion() {
  let q = selectedQuestions[currentIndex];

  document.getElementById("section").innerText = "Section " + q.section;
  document.getElementById("progress").innerText =
    (currentIndex + 1) + " / 60";

  document.getElementById("question-box").innerText =
    "Q" + (currentIndex + 1) + ". " + q.q;

  let html = "";
  q.o.forEach(opt => {
    html += `<div class="option" onclick="selectOption(this)" data-value="${opt}">${opt}</div>`;
  });

  document.getElementById("options-box").innerHTML = html;
}

function selectOption(el) {
  document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
}

function nextQuestion() {
  let selected = document.querySelector(".option.selected");

  if (!selected) {
    alert("Select an option");
    return;
  }

  answers[currentIndex] = selected.getAttribute("data-value");
  currentIndex++;

  if (currentIndex < selectedQuestions.length) {
    loadQuestion();
  } else {
    submitTest();
  }
}

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

  // 🔥 EMAILJS SEND
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,

    sectionA: sectionScores.A,
    sectionB: sectionScores.B,
    sectionC: sectionScores.C,
    sectionD: sectionScores.D,
    sectionE: sectionScores.E,

    total: total
  })
  .then(function(response) {
    console.log("SUCCESS", response);
  }, function(error) {
    console.log("FAILED", error);
  });

  // THANK YOU SCREEN
  document.body.innerHTML = `
    <div style="max-width:500px; margin:50px auto; text-align:center;">
      <img src="logo.png" style="width:120px; margin-bottom:20px;">
      <h1>Test Completed</h1>
      <p>
        Thank you. Your response has been registered.<br>
        Please contact the administrator for the next steps.
      </p>
    </div>
  `;
}
