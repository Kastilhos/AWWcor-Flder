// Why addEventListener... We will explain later
const allFilters = document.getElementsByClassName('portfolio__filter')
const allImages = Array.from(document.getElementsByClassName('portfolio__images'));
let visibleImages = [...allImages]
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
    
visibleImages.forEach((img) => {
    img.addEventListener('click', () => {
    displayImg(img);
})
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
    
    function toggleFilter () {
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


const displayImg = function(img) {
    
    const portDisplay = document.getElementById("port-display");
    const imgDisplay = document.getElementById("display-image");

    imgDisplay.src = img.src;
    portDisplay.classList.add("port-display--visible")
}

/*
const appendButtons = () => {

        const closeButton = document.createElement("div");
        closeButton.classList.add("port-display__close");
        //closeButton.setAttribute("close-button");

        const nextButton = document.createElement("img");
        nextButton.classList.add("port-display__next");
        //nextButton.setAttribute("next-button");

        const previousButton = document.createElement("img");
        previousButton.classList.add("port-display__previous");
        //previousButton.setAttribute("previous-button");

        closeButton.textContent = "☒";
        nextButton.src = "./assets/arrow-right.svg";
        previousButton.src = "./assets/arrow-left.svg";

        imageWraper.appendChild(closeButton);
        imageWraper.appendChild(nextButton);
        imageWraper.appendChild(previousButton);
    }

    appendButtons();
    */