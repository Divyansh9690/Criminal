const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
function message(){
    var Email = document.getElementById('email');
    var Password = document.getElementById('password')
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Email.value === "" || Password.value === ''){
        danger.style.display = 'block';
        
    }
    else{
        setTimeout(() => {
        window.location.assign('interface.html');
            Email.value = '';
            Password.value = ''
        },2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    },4000);
}
function Message(){
    var Username = document.getElementById('username')
    var email = document.getElementById('regEmail');
    var password = document.getElementById('regPassword')
    const Success = document.getElementById('Success');
    const Danger = document.getElementById('Danger');

    if(Username.value === "" || email.value === "" || password.value === ''){
        Danger.style.display = 'block';
        
    }
    else{
        setTimeout(() => {
        window.location.assign('interface.html');
            email.value = '';
            password.value = ''
        },2000);

        Success.style.display = 'block';
    }


    setTimeout(() => {
        Danger.style.display = 'none';
        Success.style.display = 'none';
    },4000);
}



