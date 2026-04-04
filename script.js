// ================= VARIABLES =================
let currentIndex = 0;
let answers = [];
let timer;
let timeLeft = 60 * 60;
let warningCount = 0;
let testSubmitted = false;

// ================= ADMIN LOGIN =================
function adminLogin() {
  alert("Login clicked"); // DEBUG — REMOVE LATER

  let email = document.getElementById("adminEmail").value;
  let password = document.getElementById("adminPassword").value;

  if (email === "admin@nifldh.com" && password === "admin@ldhnif") {
    alert("Login success");

    document.getElementById("admin-box").style.display = "none";
    document.getElementById("rules-box").style.display = "block";
  } else {
    alert("Invalid admin credentials");
  }
}

// ================= RULES =================
function toggleRules() {
  document.getElementById("rulesNextBtn").disabled =
    !document.getElementById("rulesCheck").checked;
}

function goToLogin() {
  document.getElementById("rules-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
}

// ================= ANTI-CHEAT =================
document.addEventListener("visibilitychange", function () {
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

// ================= SHUFFLE =================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ================= QUESTIONS =================
function generateQuestions() {
  let A = shuffle(questionSections.A).slice(0,10).map(q=>({...q,section:"A"}));
  let B = shuffle(questionSections.B).slice(0,10).map(q=>({...q,section:"B"}));
  let C = shuffle(questionSections.C).slice(0,15).map(q=>({...q,section:"C"}));
  let D = shuffle(questionSections.D).slice(0,15).map(q=>({...q,section:"D"}));
  let E = questionSections.E.map(q=>({...q,section:"E"}));

  return [...A,...B,...C,...D,...E];
}

let selectedQuestions = generateQuestions();

// ================= START =================
function startTest() {
  document.getElementById("login-box").style.display="none";
  document.getElementById("test-box").style.display="block";
  loadQuestion();
}

// ================= LOAD =================
function loadQuestion() {
  let q = selectedQuestions[currentIndex];

  document.getElementById("question-box").innerText =
    `Q${currentIndex+1}. ${q.q}`;

  let html="";
  q.o.forEach(opt=>{
    html+=`<div onclick="selectOption(this)">
      <input type="radio" name="opt" value="${opt}">${opt}
    </div>`;
  });

  document.getElementById("options-box").innerHTML=html;
}

// ================= SELECT =================
function selectOption(el){
  el.querySelector("input").checked=true;
}

// ================= NEXT =================
function nextQuestion(){
  let selected=document.querySelector('input[name="opt"]:checked');

  if(!selected){
    alert("Select option");
    return;
  }

  answers[currentIndex]=selected.value;
  currentIndex++;

  if(currentIndex<selectedQuestions.length){
    loadQuestion();
  }else{
    submitTest();
  }
}

// ================= SUBMIT =================
function submitTest(){
  if(testSubmitted) return;
  testSubmitted=true;

  fetch("https://script.google.com/macros/s/AKfycbxIXT8lLdUmWrPluIhXuCU9BtGNTuqPh6iaxQ-7doG64rYOPwxZmtafMozBg8NXloJ1/exec",{
    method:"POST",
    body:JSON.stringify({name:"test"}),
    headers:{"Content-Type":"application/json"}
  });

  document.body.innerHTML="<h1>Test Completed</h1>";
}
