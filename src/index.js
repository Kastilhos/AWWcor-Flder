    const filter = {
        all: document.getElementById("all"),
        button: {
            'web-design': document.getElementById("web-design"),
            'graph-design': document.getElementById("graph-design"),
            'artwork': document.getElementById("artwork")
        },
        display: {
            'web-design': document.getElementsByClassName("portfolio__web-design"),
            'graph-design': document.getElementsByClassName("portfolio__graph-design"),
            'artwork': document.getElementsByClassName("portfolio__artwork")
        }
    }

function filterButton(select) {
    toggleButton = (selected) => {
        filter.button[selected].toggle('portfolio__filter--toggled')
    }/*
    toggleFilter = (selected) => {
        for (let i of filter.display.selected)
            i.classList.toggle(`portfolio__${i}--toggled`)
    }*/

    if (select == "all" && !filter.all.contains("portfolio__filter--toggled")) {
        for (let i in filter.button) {
            if (i.contains("portfolio__filter--toggled")) {
                toggleButton(i);
            }
        }/*
        for (let i of filter.display) {
            toggleFilter(i);
        }*/
    }
}

let a = filter.all.addEventListener('click',filterButton("all"));
let b = filter.button["web-design"].addEventListener('click',filterButton("web-design"));

filterButton(all);










/*
    function toggleSingle(selected) {

        portfolioFilter[selected].button.classList.toggle('portfolio__filter--toggled');
        for (let i in portfolioFilter) {
            for (let j of portfolioFilter[i].display) {
                    j.classList.toggle(`portfolio__${i}--toggled`);
            }
        }

    }

    function toggleAll(selected) {
        console.log(select)
        portfolioFilter[selected].button.classList.toggle('portfolio__filter--toggled');

        for (let i in portfolioFilter) {
            console.log(i)
            console.log(i != selected)
            if (i != selected && portfolioFilter[i].button.classList.contains('portfolio__filter--toggled')) {
                console.log(portfolioFilter[i].button)
                portfolioFilter[i].button.classList.toggle('portfolio__filter--toggled');
            } else {
                for (let j of portfolioFilter[i].display) {
                    j.classList.toggle(`portfolio__${i}--toggled`);
                }
            }
        };
    }

    //For All
    if (!portfolioFilter[select].button.classList.contains('portfolio__filter--toggled')) {
        let a = select;
        return toggleAll(a);
    };
}
*/