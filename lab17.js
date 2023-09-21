const slideImages = document.querySelectorAll('img');
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const dots = document.querySelectorAll('.dot');
const currentImg = 1;
var index = 0;

nextBtn.addEventListener('click', ()=> {
    
    index += 1;
    console.log(index);
    slideImages.forEach((slide) => {
        // if (index >= 5) {
            // slide.style.transform = 'translateX(0)';
            slide.style.transform = `translateX(-${index % 5}00% )`;
        // } else {
            // slide.style.transform = `translateX(-${index}00% )`;
        
        console.log(slide.style.transform);
        
    })
        
        
})


backBtn.addEventListener('click', ()=> {
    index -= 1;
    console.log('back', index);
    slideImages.forEach((slide) => {
        slide.style.transform = `translateX(-${index % 5}00% )`;
        console.log('백',slide.style.transform);
    });
})