const menu =  document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display Mobile Menu//
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
} 

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = ()=>{
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    //adds the 'highlight' class to my menu items
    if(window.innerwidth>960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
       return;
    }

    if(element && window.innerWidth < 960 && scrollPos < 600 || element){
        element.classList.remove('highlight');
    }
};

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu when clicking an a menu item
const hideMobileMenu =() => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menulinks.classList.remove('active')
    }
}

menulinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);