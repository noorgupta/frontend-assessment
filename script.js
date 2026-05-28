// SLIDER

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let currentSlide = 0;

// SHOW SLIDE

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");
}

// NEXT BUTTON

next.addEventListener("click", ()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

// PREVIOUS BUTTON

prev.addEventListener("click", ()=>{

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

// DOT CLICK

dots.forEach((dot,index)=>{

    dot.addEventListener("click", ()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});

// AUTOPLAY

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},3000);

// TABS

const tabButtons = document.querySelectorAll(".tab-btn");

const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button)=>{

    button.addEventListener("click", ()=>{

        tabButtons.forEach((btn)=>{
            btn.classList.remove("active");
        });

        tabContents.forEach((content)=>{
            content.classList.remove("active");
        });

        button.classList.add("active");

        document
        .getElementById(`tab${button.dataset.tab}`)
        .classList.add("active");

    });

});
