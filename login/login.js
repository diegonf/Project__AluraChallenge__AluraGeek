import { checkADM } from "../assets/js/Users.js";

//Definig class span
const loginSpan = document.querySelector('[data-loginspan]');
loginSpan.classList.add('hidden');

//Listening to Login Button and autenticating user
const form = document.querySelector('[data-loginform]');
const userEmail = document.querySelector('[data-useremail]');
const userPassword = document.querySelector('[data-userpassword]');
const loginButton = document.querySelector('[data-loginbutton]');
loginButton.addEventListener('click', (event) => {
    loginSpan.classList.add('hidden');
    event.preventDefault();
    const formStatus = form.checkValidity();
    form.reportValidity(); 

    if(formStatus){
        if (checkADM(userEmail.value, userPassword.value)){
            window.location.href = '../produtos'
        } else {
            loginSpan.classList.remove('hidden');
        }
    }
})