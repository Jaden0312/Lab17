const slideImages = document.querySelectorAll('img');
const nextBtn = document.getElementById('.next');
const backBtn = document.getElementById('.back');
const dots = document.querySelectorAll('.dot');
const currentImg = 1;

nextBtn.addEventListener('click', ()=> {
        slideImages.style.transform = 'translateX(-100%)'
         // slideImages.style.left = '-100%';
    console.log(nextBtn);
})


backBtn.addEventListener('click', ()=> {
    slideImages.style.transform = 'translate(100%)'
    // slideImages.style.left = '100%';
    console.log(backBtn);
})