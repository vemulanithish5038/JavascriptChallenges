const credentials1 = document.getElementById("change-credentials1");
const credentials2 = document.getElementById("change-credentials2");
const loginform = document.getElementById("login-form");
const signinform = document.getElementById("signin-form");
const switchagain = document.getElementById("switch-user-again");
const switchonce = document.getElementById("switch-to-registeration");

// loginform.style.display = 'block';
// signinform.style.display = 'none';


credentials2.addEventListener("click", () => {
  loginform.style.display = 'none';
  signinform.style.display = 'block';
  switchagain.style.display = 'block';
  switchonce.style.display = 'none';
  history.replaceState({id:1},'','http://127.0.0.1:5500/Webstalk/registration')
});

credentials1.addEventListener("click", () => {
  loginform.style.display = 'block';
  signinform.style.display = 'none';
  switchonce.style.display = 'block';
  switchagain.style.display = 'none';
  history.pushState({id:2},'','http://127.0.0.1:5500/Webstalk/login')
});


