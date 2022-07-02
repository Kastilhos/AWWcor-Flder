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
    
const allFilters = document.getElementsByClassName('portfolio__filter')
const allImages = document.getElementsByClassName('portfolio__images');
let activeFilter = ['all'];


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
}

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
}
