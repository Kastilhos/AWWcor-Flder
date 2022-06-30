// Why addEventListener... We will explain later

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


const filter = {
    'all': document.getElementById("all"),
    button: {
        'web-design': document.getElementById("web-design"),
        'graphic-design': document.getElementById("graphic-design"),
        'artwork': document.getElementById("artwork")
    },
    display: {
        'web-design': document.getElementsByClassName("portfolio__web-design"),
        'graphic-design': document.getElementsByClassName("portfolio__graphic-design"),
        'artwork': document.getElementsByClassName("portfolio__artwork")
    }
}

function filterButton(select) {
    
    const toggleButton = (selected) => {

        if (selected === "all") {
            filter[selected].classList.toggle('portfolio__filter--toggled')
        } else {
            console.log(selected)
            filter.button[selected].classList.toggle('portfolio__filter--toggled')
        }
    }
    
    const toggleFilter = (selected) => {

        for (let img of filter.display[selected]) {
            img.classList.toggle(`portfolio__${selected}--toggled`)
        }
    }

    const toggleAll = (selected) => {
        
        for (let button in filter.button) {
            if (this[button].classList.contains("portfolio__filter--toggled")) {
                toggleButton(button);
            } else {
                toggleFilter(button);
            }
            toggleButton(selected);
        }
    }

    if (select === "all" && filter[select].classList.contains("portfolio__filter--toggled")) {
        return;
    } else if (select === "all" && !filter[select].classList.contains("portfolio__filter--toggled")) { 
        toggleAll(select);
    } else if (filter['all'].classList.contains("portfolio__filter--toggled")) {
        toggleButton("all");
        toggleButton(select);
        toggleAll(select);
    } else {
        toggleButton(select);
        if (/*every button.key that does not contain toggle*/false) {
            toggleAll("all")
        } else {
            toggleFilter(select)
        }
    }

}
