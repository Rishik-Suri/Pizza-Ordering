burgur = document.querySelector('.burgur');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnow = document.querySelector('.rightnow');
burgur.addEventListener('click',()=>{
    navlist.classList.toggle('v-class');
    rightnow.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})