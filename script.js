let authModal = document.querySelector('.auth-modal');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');
let loginBtn = document.querySelector('.login-btn');
let closeBtn = document.querySelector('.close-btn');
let profileBox = document.querySelector('.profile-box');
let avatarCircle = document.querySelector('.avatar-circle');
let alertBox = document.querySelector('.alert-box');

registerLink.addEventListener('click', ()=> authModal.classList.add('slide'));
loginLink.addEventListener('click', ()=> authModal.classList.remove('slide'));
loginBtn.addEventListener('click', ()=> authModal.classList.add('show'));
closeBtn.addEventListener('click', ()=> authModal.classList.remove('show','slide'));
avatarCircle.addEventListener('click', ()=> profileBox.classList.toggle('show-dropdown') );

setTimeout(()=>{
    alertBox.classList.add('show');
},50);

setTimeout(()=>{
    alertBox.classList.remove('show');
    setTimeout(() =>alertBox.remove(), 1000);
},6000);

