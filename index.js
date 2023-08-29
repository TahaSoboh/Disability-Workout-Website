const slideImage = document.querySelectorAll(".slide-image");

const slidesContainer = document.querySelector(".slides-container");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// set up slider

function init() {
    /*

    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    slideImage[3] = 300%
    slideImage[4] = 400%

    */

    slideImage.forEach((img, i) => {
        img.style.left = i * 101 + "%";
    });

    slideImage[0].classList.add("active");

    createNavigationDots();
    
}

init();

//Create nav dots

function createNavigationDots() {
    for (let i=0; i < numberOfImages; i++) {
        const dot = document.createElement ("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }

    navigationDots.children[0].classList.add("active");
}

//Next button

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages -1) {
        goToSlide(0);

        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
    if (currentSlide <=0 ) {
        goToSlide( numberOfImages - 1);

        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide=slideNumber;

    setActiveClass();
}

//Set Active Class

function setActiveClass() {
    // Set active class for slide image

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    //set active for nav dots
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}