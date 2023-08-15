
// Navbar color change on window scroll
window.addEventListener('scroll', ()=>{
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav__background__change', window.scrollY > 0);
})


// Nav-Menu Variables
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const navMenu = document.querySelector('nav ul');

// Show Nav-Menu
openMenuBtn.addEventListener('click', ()=>{
    openMenuBtn.style.display = "none";
    navMenu.style.display = "block";
    closeMenuBtn.style.display = "inline-block";
})

// Hide Nav-Menu
const hideNavMenu = ()=>{
    closeMenuBtn.style.display = "none";
    navMenu.style.display = "none"
    openMenuBtn.style.display = "inline-block";
}
closeMenuBtn.addEventListener('click', hideNavMenu)

// Show/hide FAQs question_answer
const faqs = document.querySelectorAll('.faq');


faqs.forEach(faq=>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("open");
        const faqIcon = faq.querySelector(".faq__icon i");
        if (faqIcon.className === "fa-solid fa-plus"){
            faqIcon.className = "fa-solid fa-minus";
        }else{
            faqIcon.className = "fa-solid fa-plus";
        }
    })
})

// Swiper
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // When window width is >= 1200
    breakpoints:{
        1200: {
            slidesPerView: 1,
        }
    }
});

