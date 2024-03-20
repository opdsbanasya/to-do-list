// register
let inputname = document.querySelector("#name");
let inputusername = document.querySelector("#username");
let inputemail = document.querySelector("#email");
let inputpass = document.querySelector("#pass");
let inputwork = document.querySelector("#work");
let inputsub = document.querySelector("#submit");
let registerationDetails = {};
let inps = document.querySelectorAll(".inp");

registerationDetails={
    name: inputname.value,
    username : inputusername.value,
    email: inputemail.value,
    password: inputpass.value,
    work: inputwork.value,
}
function setError(name){
    let err = document.querySelector(".error");
    err.innerHTML = "*The length of name should be greter than 5";
}

function validateForm(){
    
    let validate = true;
    if(registerationDetails.name.length<5){
        setError("Name");
        validate = false;
    }
    else{
        alert("Registration successfull")
    }
    return validate;
}
inputsub.addEventListener("click", validateForm);

// let logBtn = document.addEventListener("#login-btn");
// let usernameLog = document.querySelector("#usernameLog");
// let passLog = document.querySelector("#passLog");
// logBtn.addEventListener("click",()=>{
//     if(registerationDetails.username === usernameLog.value && passLog.value === registerationDetails.password){
//         console.log("login successfull");
//     } else{
//         console.log("Invalid login details");
//     }
// })