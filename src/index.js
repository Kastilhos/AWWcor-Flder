// Mobile navigation menu

document.getElementById("headerButton").addEventListener('click', () => {
    displayMenu();
});

function displayMenu() {
    const menuCheckBox = document.getElementById('headerCheck');
    const pageBody = document.querySelector("body").classList;

    if (menuCheckBox.checked) {
        menuCheckBox.checked = false;
        pageBody.remove("disable-scroll");
    } else {
        menuCheckBox.checked = true;
        pageBody.add("disable-scroll");
    }
}

// Portfolio Filter

const allFilters = document.getElementsByClassName('portfolio__filter')
const allImages = Array.from(document.getElementsByClassName('portfolio__images'));
let activeFilter = ['all'];


document.getElementById("all").addEventListener('click', () => {
    filterButton('all');
});

document.getElementById("web-design").addEventListener('click', () => {
    filterButton('web-design');
});

document.getElementById("graphic-design").addEventListener('click', () => {
    filterButton('graphic-design');
});

document.getElementById("artwork").addEventListener('click', () => {
    filterButton('artwork');
});

function filterButton(select) {

    activeFilter.indexOf(select) >= 0
        ? activeFilter.splice(activeFilter.indexOf(select), 1)
        : activeFilter.push(select)

    select === 'all' || activeFilter.length === 0
        ? activeFilter = ['all']
        : activeFilter.indexOf('all') >= 0
            ? activeFilter.splice(activeFilter.indexOf('all'), 1)
            : null;

    for (let button of allFilters) {
        activeFilter.indexOf(button.id) >= 0 && !button.classList.contains('portfolio__filter--toggled')
            ? button.classList.add('portfolio__filter--toggled')
            : activeFilter.indexOf(button.id) >= 0 && button.classList.contains('portfolio__filter--toggled')
                ? null
                : button.classList.remove('portfolio__filter--toggled');
    }

    toggleFilter();

    function toggleFilter() {
        if (activeFilter.length === 1 && activeFilter.indexOf('all') === 0) {
            for (let img of allImages) {
                img.classList.remove("portfolio__images--hidden");
            }
        } else {
            for (let img of allImages) {
                const check = activeFilter.some((select) =>
                    img.classList.contains(`portfolio__${select}`)
                );

                if (check) {
                    img.classList.remove("portfolio__images--hidden")
                } else {
                    img.classList.add("portfolio__images--hidden")
                }
            }
        }
        visibleImages = allImages.filter((img) => !img.classList.contains('portfolio__images--hidden'))
    }

}


// Portfolio Image Display

const portDisplay = document.getElementById("port-display");
const imgDisplay = document.getElementById("display-image");
let visibleImages = [...allImages]
let selectedImg;

document.querySelector(".port-display__close").addEventListener('click', () => {
    changeButtons('close');
})

document.querySelector(".port-display__nav-button--next").addEventListener('click', () => {
    changeButtons('next');
})

document.querySelector(".port-display__nav-button--previous").addEventListener('click', () => {
    changeButtons('previous');
})

function displayImg(img) {
    selectedImg = img;
    imgDisplay.src = img.src;
    portDisplay.classList.add("port-display--visible");
    document.querySelector("body").classList.add("disable-scroll");
}

visibleImages.forEach((img) => {
    img.addEventListener('click', () => {
        displayImg(img);
    })
});

Array.from(document.getElementsByClassName("header__mobile-li")).forEach((button) => {
    button.addEventListener('click', () => {
        displayMenu();
    });
})

function changeButtons(selection) {

    currentImageIndex = visibleImages.indexOf(selectedImg)
    currentImage = visibleImages[currentImageIndex];
    
    if (selection === 'close') {
        portDisplay.classList.remove("port-display--visible")
        document.querySelector("body").classList.remove("disable-scroll");
    }
    else if (selection === 'next') {
        currentImage === visibleImages.at(-1) ? null
            : (function () {
                selectedImg = visibleImages[currentImageIndex + 1];
                imgDisplay.src = selectedImg.src;
                imgDisplay.alt = selectedImg.alt;
            }());
    }
    else if (selection === 'previous') {
        currentImage === visibleImages.at(0) ? null
            : (function () {
                selectedImg = visibleImages[currentImageIndex - 1];
                imgDisplay.src = selectedImg.src;
                imgDisplay.alt = selectedImg.alt;
            }());
    }
}


// Automatic infinite slider

const sliderNext = document.querySelector(".slider__nav-button--next");
const sliderPrevious = document.querySelector(".slider__nav-button--previous");
const slider = document.querySelector(".slider__wraper");
let slides = document.getElementsByClassName("slider__image");

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone'

slider.append(firstClone);
slider.prepend(lastClone);

let index = 1;
let last = slides.length - 1;

slider.style.marginLeft = `-${index * 100}%`
let interval = 3750;

sliderNext.addEventListener('click', next);
sliderPrevious.addEventListener('click', previous);


function next() {
    if (index >= last) return
    index++
    slider.style.transition = `.75s`
    slider.style.marginLeft = `-${index * 100}%`
}

function previous() {
    if (index <= 0) return
    index--
    slider.style.transition = `.75s`
    slider.style.marginLeft = `-${index * 100}%`
}

function autoSlider() {
    automate = setInterval(() => {
    next();
    }, interval);
};


slider.addEventListener("transitionend", () => {
    slides = document.getElementsByClassName("slider__image");
    if (slides[index].id == firstClone.id) {
        slider.style.transition = 'none';
        index = 1;
        slider.style.marginLeft = `-${index * 100}%`
    };
    if (slides[index].id == lastClone.id) {
        slider.style.transition = 'none';
        index = last-1;
        slider.style.marginLeft = `-${index * 100}%`
    };
})

slider.addEventListener('mouseenter', () => {
    clearInterval(automate);
})

slider.addEventListener('mouseleave', autoSlider);

autoSlider();


//-------------------------------------------------------------------//


/*
while (slides.length > 0) {
    slides[0].remove()
};

let sliderCounter = 0;

function addImgs(selection) {

    const sliderFrame = document.querySelector(".slider__wraper");
    const createImg = document.createElement("img");
    createImg.src = sliders[sliderCounter];
    createImg.classList.add("slider__image");

    switch (selection) {
        case "next":
            createImg.style.marginLeft = "100%";
            sliderFrame.appendChild(createImg);
            break;
        case "previous":
            createImg.style.marginLeft = "-100%";
            sliderFrame.appendChild(createImg);
            break;
        default :
            sliderFrame.appendChild(createImg);
    };

    if (selection == "next" && sliderCounter+1 == sliders.length) {
        sliderCounter = 0;
    } else if (selection == "previous" && sliderCounter == 0) {
        sliderCounter = sliders.length-1;
    } else if (selection == "previous") {
        sliderCounter--;
    } else {
        sliderCounter++;
    };
    if (selection != undefined) {
        setTimeout(() => {
            cicleSlider(selection)
        }, 1000);

    };

};

function cicleSlider(selection) {
/*
    sliderNext.removeEventListener('click', () => {
        addImgs("next");
    });
    sliderPrevious.removeEventListener('click', () => {
        addImgs("previous");
    });
/
    const sliderFrame2 = document.getElementsByClassName("slider__image");

    switch (selection) {
    case "next":
        sliderFrame2[0].style.marginLeft = "-100%";
        sliderFrame2[1].style.marginLeft = "0";
        setTimeout(function () {
           /* sliderNext.addEventListener('click', () => {
                addImgs("next");
            });
            sliderPrevious.addEventListener('click', () => {
                addImgs("previous");
            });/
            sliderFrame2[0].remove();
        }, 500);
        break;
    case "previous":
        sliderFrame2[0].style.marginLeft = "100%";
        sliderFrame2[1].style.marginLeft = "0";
        setTimeout(function () {
           /* sliderNext.addEventListener('click', () => {
                addImgs("next");
            });
            sliderPrevious.addEventListener('click', () => {
                addImgs("previous");
            });/
            sliderFrame2[0].remove();
        }, 500);
        break;
    }

};

addImgs();

/*
setInterval(() => {
    document.getElementById(`image` + sliderCounter).checked = true;
    sliderCounter++;
    if (sliderCounter > 2) {
        sliderCounter = 1;
    }
}, 5000);
/*/