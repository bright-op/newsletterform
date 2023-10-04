const ENTRADA_EMAIL = document.querySelector('.entrada-email')
const BTN_EMAIL_SUBMIT = document.querySelector('.btn-submit');
const BTN_DISMISS = document.querySelector('.btn-dismiss');
let errorChecker = document.getElementById('error-show')
let modalMessage = document.querySelector('.contenedor-modal')
let emailInput = document.querySelector('.email-form-input')

BTN_EMAIL_SUBMIT.addEventListener('click',(e)=>{
    // prevent page from reloading
    e.preventDefault()
    checkEmail()
});

function checkEmail(){
    let email =  ENTRADA_EMAIL.value
    if(email == '' || email == ' '){
        errorChecker.style.display = 'block'
        ENTRADA_EMAIL.classList.add('toggle-error-show');
    }
    for(let i = 0; i < email.length; i++ ){
       if(email.match(/.com/) && email[i] == '@'){
           // remove error
           errorChecker.style.display = 'none'
           ENTRADA_EMAIL.classList.remove('toggle-error-show')
           emailInput.innerHTML = email
           // open modal
           modalMessage.classList.add('open-modal')
        }else if(!email.match(/.com/) && email[i] != '@'){
            errorChecker.style.display = 'block'
            ENTRADA_EMAIL.classList.add('toggle-error-show');
        }
    }
}

BTN_DISMISS.addEventListener('click',()=>{
    // close modal
    modalMessage.classList.remove('open-modal')
            errorChecker.style.display = 'none'
            ENTRADA_EMAIL.classList.remove('toggle-error-show')
            ENTRADA_EMAIL.value = '';
})