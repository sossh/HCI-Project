const loginForm = document.getElementById("loginForm");
const guestBtn = document.getElementById("guestBtn");
const signUpForm = document.getElementById("signUpForm");
const signUpWrapper = document.querySelector(".signUpWrapper");
const signUpOpenBtn = document.getElementById("signUpOpenBtn");
const signUpCloseBtn = document.getElementById("closeBtn");
const signUpCancelBtn = document.getElementById("cancelBtn");
const signUpBtn = document.getElementById("signUpBtn");

// Login
function goToHome() {
    window.location.href = "index.html";
}
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    goToHome();
});
guestBtn.addEventListener("click", ()=>{goToHome();});

//Sign Up
function openSignUp() {
    signUpWrapper.style.display="flex";
}
function closeSignUp() {
    signUpWrapper.style.display="none";
}
signUpOpenBtn.addEventListener("click",openSignUp);
signUpCloseBtn.addEventListener("click",closeSignUp);
signUpBtn.addEventListener("click",closeSignUp);
signUpCancelBtn.addEventListener("click",closeSignUp);
