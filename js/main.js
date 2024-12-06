var y=[{name:'abdelmonem',age:39},
  {name:'osama',age:6}
]

for(x of y)
{
  var xx=x.age>20
// console.log(xx);

}
console.log(xx);

var welcome = document.getElementById("welcom");
var login = document.getElementById("login");
var signUp = document.getElementById("signUp");

var emailLoginFromSignIn = document.getElementById("emailLoginFromSignIn");
var passwordLoginFromSignIn = document.getElementById(
  "passwordLoginFromSignIn"
);
var loginBtnFromSignIn = document.getElementById("loginBtnFromSignIn");
var signUpBtnFromSignIn = document.getElementById("signUpBtnFromSignIn");
var userFound;
var userFoundFlag;
var userEntryFlag;

var userArray = [];
if (JSON.parse(localStorage.getItem("users"))) {
  console.log("good");
  userArray = JSON.parse(localStorage.getItem("users"));
} else {
  console.log(`You Dont't Have Any Data `);
}

function checkFieldsSignUp() {
  if (
    nameLoginFromSignUp.value == "" ||
    emailLoginFromSignUp.value == "" ||
    passwordLoginFromSignUp.value == ""
  ) {
    userEntryFlag = false;
  } else {
    userEntryFlag = true;
  }
}
function checkFieldsSignIn() {
  if (emailLoginFromSignIn.value == "" || passwordLoginFromSignIn.value == "") {
    userEntryFlag = false;
  } else {
    userEntryFlag = true;
    console.log(`userEntryFlag${userEntryFlag}`);
  }
}
function checkUserLogin() {
  userFound = userArray.filter((result) => {
    return result.email.includes(emailLoginFromSignIn.value);
  });
  console.log(userFound);
  var xx = {};
  xx = userFound;
  console.log(userFound[0].email);
  console.log(userFound[0].password);

  if (
    userFound.length > 0 &&
    userFound[0].email == emailLoginFromSignIn.value &&
    userFound[0].password == passwordLoginFromSignIn.value
  ) {
    userFoundFlag = true;
    console.log("founded");

    document.getElementById("warningLogin").innerHTML = ``;
  } else {
    document.getElementById(
      "warningLogin"
    ).innerHTML = `<p class="text-center text-warning" >wrong Data</p>`;
    console.log("not foundegfhgfhd");
    userFoundFlag = false;
    console.log(`userFoundFlag${userFoundFlag}`);
  }
}

function checkUserSignUp() {
  userFound = userArray.filter((result) => {
    return result.email.includes(emailLoginFromSignUp.value);
  });
  if (userFound.length > 0) {
    userFoundFlag = true;
  } else {
    userFoundFlag = false;
  }
}

signUpBtnFromSignIn.addEventListener("click", function () {
  login.classList.add("d-none");
  login.classList.remove("d-flex");

  signUp.classList.add("d-flex");
  signUp.classList.remove("d-none");
});

var nameLoginFromSignUp = document.getElementById("nameLoginFromSignUp");
var emailLoginFromSignUp = document.getElementById("emailLoginFromSignUp");
var passwordLoginFromSignUp = document.getElementById(
  "passwordLoginFromSignUp"
);
var signUpBtnFromsignUp = document.getElementById("signUpBtnFromsignUp");
var signInBtnFromsignUp = document.getElementById("signInBtnFromsignUp");

signInBtnFromsignUp.addEventListener("click", function () {
  signUp.classList.remove("d-flex");
  signUp.classList.add("d-none");

  login.classList.add("d-flex");
  login.classList.remove("d-none");
});

// //////////////signUpBtnFromsignUp//////////////////////////////////////////
signUpBtnFromsignUp.addEventListener("click", function () {
  checkFieldsSignUp();
  checkUserSignUp();
  if (userFoundFlag == true || userEntryFlag == false) {
    console.log("Error SignUp");
  } else {
    var user = {
      name: nameLoginFromSignUp.value,
      email: emailLoginFromSignUp.value,
      password: passwordLoginFromSignUp.value,
    };

    userArray.push(user);
    localStorage.setItem("users", JSON.stringify(userArray));
    console.log(userArray);

    doneRegestration.classList.add("d-block");
    doneRegestration.classList.remove("d-none");
  }
});

// //////loginBtnFromSignIn///////////
loginBtnFromSignIn.addEventListener("click", function () {
  checkUserLogin();
  checkFieldsSignIn();
  if (userFoundFlag == false || userEntryFlag == false) {
    console.log("Error SignIn");
  } else {
    localStorage.setItem("userLogin", true);
    login.classList.add("d-none");
    login.classList.remove("d-flex");

    welcome.classList.add("d-flex");
    welcome.classList.remove("d-none");
document.getElementById('welcomContent').innerHTML+=`   <h1 class="text-warning">Welcome ${userFound[0].name}</h1>`
    
  }
});


function logOut()
{
  localStorage.removeItem('userLogin')

  login.classList.add("d-flex");
  login.classList.remove("d-none");

  signUp.classList.add("d-none");
  signUp.classList.remove("d-flex");

  welcome.classList.add("d-none");
  welcome.classList.remove("d-flex");

}



(function checkStatus() {
  if (localStorage.getItem("userLogin")) {

    login.classList.add("d-none");
    login.classList.remove("d-flex");

    signUp.classList.add("d-none");
    signUp.classList.remove("d-flex");

    welcome.classList.add("d-flex");
    welcome.classList.remove("d-none");

    
  } else {
    login.classList.add("d-flex");
    login.classList.remove("d-none");

    signUp.classList.add("d-none");
    signUp.classList.remove("d-flex");

    welcome.classList.add("d-none");
    welcome.classList.remove("d-flex");
    
  }
})();
