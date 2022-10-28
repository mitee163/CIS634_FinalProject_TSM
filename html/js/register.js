// Initialize Userfront
Userfront.init('demo1234');

// 1. Reference the elements on the page
var signupFormEl = document.getElementById("signup-form");
var alertEl = document.getElementById("alert");
var nameEl = document.getElementById("name");
var dobEl = document.getElementById("dob");
var emailEl = document.getElementById("email");
var accountNameEl = document.getElementById('account-name');
var passwordEl = document.getElementById("password");
var passwordVerifyEl = document.getElementById("password-verify");
// var googleButtonEl = document.getElementById("signup-google");

// 2. Signup with a username/email and password
function formSignup(e) {
  // Prevent the form's default behavior
  e.preventDefault();
  // Reset the alert to empty
  setAlert();
  // Verify that the passwords match
  var password = passwordEl.value;
  var passwordVerify = passwordVerifyEl.value;
  if (password !== passwordVerify) {
    return setAlert("Password verification must match.");
  }
  // Call Userfront.signup()
  Userfront.signup({
    method: "password",
    email: emailEl.value,
    password: password,
    data: {
      accountName: nameEl.value
    }
  }).catch(function (error) {
    setAlert(error.message);
  });
}

// Set the alert element to show the message
function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}

// 3. Add an event listener for the signup for submit
signupFormEl.addEventListener("submit", formSignup);

// 4. Add an event listener for the google button click
// googleButtonEl.addEventListener("click", function () {
//   Userfront.signup({ method: "google" });
// });
