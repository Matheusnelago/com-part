
var open = document.querySelector('.ham').addEventListener('click', (e) => {
    e.preventDefault();
    navbar.style.display = 'block';
});
var close = document.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    navbar.style.display = 'none';
});
var navbar = document.querySelector('.navbar');
window.addEventListener('resize', (e) => {
    e.preventDefault();
    if(window.matchMedia('minWidth: 45rem').matches){
        navbar.style.display = 'block';
    }else if(window.matchMedia('maxWidth: 45rem')){
        navbar.style.display = 'none';
    }
    
});
