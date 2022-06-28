//document.getElementById("all").addEventListener("click", filterButton("all"))

function filterButton(select) {

    const portfolioFilter = {
        "all": {
            button: document.getElementById("all"),
            display: "all"
        },
        "web-design": {
            button: document.getElementById("web-design"),
            display: document.getElementsByClassName("portfolio__web-design")
        },
        "graph-design": {
            button: document.getElementById("graph-design"),
            display: document.getElementsByClassName("portfolio__graph-design")
        },
        "artwork": {
            "button": document.getElementById("artwork"),
            display: document.getElementsByClassName("portfolio__artwork")
        }
    };

    function toggleAll() {

        portfolioFilter[select].button.classList.toggle('portfolio__filter--on');

        for (let i in portfolioFilter) {
            if (i != select && portfolioFilter[i].button.classList.contains('portfolio__filter--on')) {
                portfolioFilter[i].button.classList.toggle('portfolio__filter--on');
            } else {
                for (let a in i.display) {
                a.classList.toggle(`portfolio__${a}--off`)
            }
            }
        };
        }

    //For All
    if (select == portfolioFilter["all"].display ) {
        if (!portfolioFilter[select].button.classList.contains('portfolio__filter--on')) {
            return toggleAll();
        };

    } /*else {
        if (portfolioFilter.all.button.classList.contains('portfolio__filter--on')) {
            portfolioFilter.all.select.button.classList.toggle('portfolio__filter--on');
            }
        this.select.button.classList.toggle('portfolio__filter--on');
        this.select.display.classList.toggle(`portfolio__${i}--off`)
    }*/
}

/*portfolioFilter["web-design"].button.addEventListener("click", filterButton("web-design"))
portfolioFilter["graph-design"].button.addEventListener("click", filterButton("graph-design"))
portfolioFilter.artwork.button.addEventListener("click", filterButton("artwork"))*/