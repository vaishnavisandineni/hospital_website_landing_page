let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick=() =>{ 
    menu .classlist.toggle('fa-times');
    navbar .classlist.toggle('active');
}
window.onscroll = () => {
menu.classlist.toggle('fa-times');
navbar.classlist.toggle('active');
}