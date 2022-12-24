


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerview: 1,
        },
        768:{
            slidesPerview: 2,
        },
        1024:{
            slidesPerview: 3,
        },
    }
});


let wishList = document.querySelector('.wishlist');

document.querySelector('#heart-btn').onclick=() =>{
    wishList.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    /*forgotPassword.classList.remove('active');
    registrationFormForm.classList.remove('active');*/
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=() =>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    wishList.classList.remove('active');
    /*forgotPassword.classList.remove('active');
    registrationFormForm.classList.remove('active');*/
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=() =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    wishList.classList.remove('active');
   /*forgotPassword.classList.remove('active');
    registrationFormForm.classList.remove('active');*/
}

/*let registrationForm = document.querySelector('.registration-form');

document.querySelector('#create-now').onclick=() =>{
    registrationFormForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    wishList.classList.remove('active');
    forgotPassword.classList.remove('active');
}

let forgotPassword = document.querySelector('.forgot-password');

document.querySelector('#click-here').onclick=() =>{
    forgotPassword.classList.toggle('active');
    registrationFormForm.classList.remove('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    wishList.classList.remove('active');
    loginForm.classList.remove('active');
}*/


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    wishList.classList.remove('active');
    /*forgotPassword.classList.remove('active');
    registrationFormForm.classList.remove('active');*/
}
window.onscroll =() =>{
    navbar.classList.remove('active');
    wishList.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
  /*forgotPassword.classList.remove('active');
    registrationFormForm.classList.remove('active');*/
}