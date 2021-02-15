let btnClaim = document.getElementById("btn__Claim");
let errorIcon = document.getElementsByClassName("error__icon");
let errorText = document.getElementsByClassName("error__text");
let emailVal = /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
btnClaim.addEventListener("click", (e) => {
  e.preventDefault();
  let fName = document.getElementById("fname");
  let lName = document.getElementById("lname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  [0];

  if (fName.value == "") {
    fName.nextElementSibling.classList.add("error_active");
    fName.nextElementSibling.nextElementSibling.classList.add("error_active");
  }
  if (lName.value == "") {
    lName.nextElementSibling.classList.add("error_active");
    lName.nextElementSibling.nextElementSibling.classList.add("error_active");
  }
  if (email.value == "" || !emailVal.test(email.value)) {
    console.log(emailVal.test(email.value));
    email.nextElementSibling.classList.add("error_active");
    email.nextElementSibling.nextElementSibling.classList.add("error_active");
  }
  if (password.value == "") {
    password.nextElementSibling.classList.add("error_active");
    password.nextElementSibling.nextElementSibling.classList.add(
      "error_active"
    );
  }
  setTimeout(hideErrorMsg, 5000);
});

hideErrorMsg = () => {
  let arrErrorText = Array.from(errorText);
  let arrErrorIcon = Array.from(errorIcon);
  arrErrorIcon.forEach((errIconElement) => {
    errIconElement.classList.remove("error_active");
  });
  arrErrorText.forEach((errTextElement) => {
    errTextElement.classList.remove("error_active");
  });
};
