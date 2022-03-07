const hamburger = document.querySelector(".hamburger-menu");
const itemsNav = document.querySelector(".items-of-nav");
const tagA = document.querySelector('a');
hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('active');
    itemsNav.classList.toggle('active');
});