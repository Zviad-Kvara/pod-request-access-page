const email = document.getElementById("email-input");
const button = document.getElementById("click");
const error = document.getElementById("error");
const error1 = document.getElementById("error1");

const myRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", event => {
  event.preventDefault();
  if (myRegex.test(email.value)) {
    console.log("valid");
    error.innerText = "";
    error1.innerText = "";
    email.style.border = "none";
  } else {
    console.log("invalid");
    error.innerText = "Oops! Please check your email";
    email.style.border = "2px solid red";
    error1.innerText = "Oops! Please check your email ";
  }
});

error1.innerText = "";
error.innerText = "";
