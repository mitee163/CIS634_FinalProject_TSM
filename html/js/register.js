// // Initialize Userfront
// Userfront.init('demo1234');

// // 1. Reference the elements on the page
// var signupFormEl = document.getElementById("signup-form");
// var alertEl = document.getElementById("alert");
// var nameEl = document.getElementById("name");
// var dobEl = document.getElementById("dob");
// var emailEl = document.getElementById("email");
// var accountNameEl = document.getElementById('account-name');
// var passwordEl = document.getElementById("password");
// var passwordVerifyEl = document.getElementById("password-verify");
// // var googleButtonEl = document.getElementById("signup-google");

// // 2. Signup with a username/email and password
// function formSignup(e) {
//   // Prevent the form's default behavior
//   e.preventDefault();
//   // Reset the alert to empty
//   setAlert();
//   // Verify that the passwords match
//   var password = passwordEl.value;
//   var passwordVerify = passwordVerifyEl.value;
//   if (password !== passwordVerify) {
//     return setAlert("Password verification must match.");
//   }
//   // Call Userfront.signup()
//   Userfront.signup({
//     method: "password",
//     email: emailEl.value,
//     password: password,
//     data: {
//       accountName: nameEl.value
//     }
//   }).catch(function (error) {
//     setAlert(error.message);
//   });
// }

// // Set the alert element to show the message
// function setAlert(message) {
//   alertEl.innerText = message;
//   alertEl.style.display = message ? "block" : "none";
// }

// // 3. Add an event listener for the signup for submit
// signupFormEl.addEventListener("submit", formSignup);

// // 4. Add an event listener for the google button click
// // googleButtonEl.addEventListener("click", function () {
// //   Userfront.signup({ method: "google" });
// // });










function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;

} function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
