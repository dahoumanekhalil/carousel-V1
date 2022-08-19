let slideImage = Array.from(document.querySelectorAll('.slideImage'));
let slideNextBtn = document.getElementById('next');
let slidePrevBtn = document.getElementById('prev');
let regularUL = document.querySelector('.regular ul');
let currantSlide = 2;
let counter = slideImage.length;

// create list in regular section
for (let i = 1; i <= counter; i++) {
    let list = document.createElement('li');
    list.setAttribute('data-number', i);
    regularUL.appendChild(list);
};

// set variable of regular li 
let mapSlides = document.querySelectorAll('.regular ul li');

// function of reset currant slide with prev button 
slidePrevBtn.addEventListener('click', () => {
    if(currantSlide < 1) {
        return false;
    } else {
        currantSlide--;
        checking()
    };
});

// function of reset currant slide with next button 
slideNextBtn.addEventListener('click', () => {
    if(currantSlide >= counter - 1) {
        return false;
    } else {
        currantSlide++;
        checking();
    };
});


// funciton for delete all active classes from slides and regular li 
function removeActiveClasses() {

    // remove active class from all regular li 
    mapSlides.forEach((ele) => {
        ele.classList.remove('active')
    });

    // remove active class from all image slides 
    slideImage.forEach((ele) => {
        ele.classList.remove('active')
    });
};

function checking() {
    // recall function of remove active classes 
    removeActiveClasses();
    // recall function of add class active for image slides 
    addActiveClass(slideImage);
    // recall function of add class active for map slides
    addActiveClass(mapSlides);
};

checking();

function addActiveClass(ele) {
    ele[currantSlide].classList.add('active');
};

mapSlides.forEach((ele) => {
    ele.addEventListener('click', () => {
        // removeActiveClasses()
        currantSlide = +ele.getAttribute('data-number') - 1;
        checking()
    })
});