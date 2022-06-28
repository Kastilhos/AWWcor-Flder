/*
const filterAll = document.getElementById("all")
const filterArtwork = document.getElementById("artwork")
const filterWebDesign = document.getElementById("web-design")
const filterGraphDesign = document.getElementById("graph-design")
const artwork = document.getElementsByClassName("portfolio__artwork")
const webDesign = document.getElementsByClassName("portfolio__web-design")
const graphDesign = document.getElementsByClassName("portfolio__graph-design")
*/

    const portfolioFilter = {
        "all": {
            "button": document.getElementById("all"),
            display: "all"
        },
        "web-design": {
            button: document.getElementById("web-design"),
            display: document.getElementsByClassName("portfolio__web-design"),
            get toggle() {
                this.button.classList.toggle('portfolio__filter--on');
                this.display.classList.toggle(`portfolio__${this}--off`)
            }
        },
        "graph-design": {
            button: document.getElementById("graph-design"),
            display: document.getElementsByClassName("portfolio__graph-design"),
            get toggle() {
                this.button.classList.toggle('portfolio__filter--on');
                this.display.classList.toggle(`portfolio__${this}--off`)
            }
        },
        "artwork": {
            button: document.getElementById("artwork"),
            display: document.getElementsByClassName("portfolio__artwork"),
            get toggle() {
                this.button.classList.toggle('portfolio__filter--on');
                this.display.classList.toggle(`portfolio__${this}--off`)
            }
        }
    };


function filterButton(select) {

    toggleAll = () => {
        portfolioFilter.select.button.classList.toggle('portfolio__filter--on');

        for (let i of portfolioFilter) {
            if (i != select && portfolioFilter[i].button.classList.contains('portfolio__filter--on')) {
                portfolioFilter[i].button.classList.toggle('portfolio__filter--on');
                portfolioFilter[i].display.classList.toggle(`portfolio__${i}--off`)
            };
        };
        }
/*
    const portfolioFilter = {
        "all": {
            button: document.getElementById("all"),
            display: "all"
        },
        "web-design": {
            button: document.getElementById("web-design"),
            display: document.getElementsByClassName("portfolio__web-design"),
            get toggle() {
                this.button.classList.toggle('portfolio__filter--on');
                this.display.classList.toggle(`portfolio__${this}--off`)
            }
        },
        "graph-design": {
            button: document.getElementById("graph-design"),
            display: document.getElementsByClassName("portfolio__graph-design"),
            get toggle() {
                this.button.classList.toggle('portfolio__filter--on');
                this.display.classList.toggle(`portfolio__${this}--off`)
            }
        },
        "artwork": {
            button: document.getElementById("artwork"),
            display: document.getElementsByClassName("portfolio__artwork"),
            get toggle() {
                this.button.classList.toggle('portfolio__filter--on');
                this.display.classList.toggle(`portfolio__${this}--off`)
            }
        }
    };
*/
    //For All
    if (select == portfolioFilter.all.display ) {
        if (!portfolioFilter.select.button.classList.contains('portfolio__filter--on')) {

        };

    } else {
        if (portfolioFilter.all.button.classList.contains('portfolio__filter--on')) {
            portfolioFilter.all.select.button.classList.toggle('portfolio__filter--on');
            }
        this.select.button.classList.toggle('portfolio__filter--on');
        this.select.display.classList.toggle(`portfolio__${i}--off`)
    }
}

portfolioFilter['all'].button.addEventListener("click", alert("Test"))
portfolioFilter["web-design"].button.addEventListener("click", filterButton("web-design"))
portfolioFilter["graph-design"].button.addEventListener("click", filterButton("graph-design"))
portfolioFilter.artwork.button.addEventListener("click", filterButton("artwork"))

            /*
            if (filterGraphDesign.classList.contains('portfolio__filter--on')) {
                filterGraphDesign.classList.toggle('portfolio__filter--on')
            } else {
                for (let i of graphDesign) {
                    i.classList.toggle('portfolio__graph-design--off')
                }
            }
    
            if (filterWebDesign.classList.contains('portfolio__filter--on')) {
                filterWebDesign.classList.toggle('portfolio__filter--on')
            } else {
                for (let i of webDesign) {
                    i.classList.toggle('portfolio__web-design--off')
                }
            }
    
            if (filterArtwork.classList.contains('portfolio__filter--on')) {
                filterArtwork.classList.toggle('portfolio__filter--on')
            } else {
                for (let i of artwork) {
                    i.classList.toggle('portfolio__artwork--off')
                }
            }
        }
        */


/*
filterArtwork.addEventListener('click', function () {
    if (filterAll.classList.contains("portfolio__filter--on")) {
        filterAll.classList.toggle('portfolio__filter--on')
        this.classList.toggle('portfolio__filter--on')
        for (let i of graphDesign) {
            i.classList.toggle('portfolio__graph-design--off')
        }
        for (let i of webDesign) {
            i.classList.toggle('portfolio__web-design--off')
        }
    } else {
        this.classList.toggle('portfolio__filter--on')
        for (let i of artwork) {
                i.classList.toggle('portfolio__artwork--off')
            }
        }
    }
)

filterWebDesign.addEventListener('click', function () {
    if (filterAll.classList.contains("portfolio__filter--on")) {
        filterAll.classList.toggle('portfolio__filter--on')
        this.classList.toggle('portfolio__filter--on')
        for (let i of graphDesign) {
            i.classList.toggle('portfolio__graph-design--off')
        }
        for (let i of artwork) {
            i.classList.toggle('portfolio__artwork--off')
        }
    } else {
        this.classList.toggle('portfolio__filter--on')
        for (let i of webDesign) {
                i.classList.toggle('portfolio__web-design--off')
            }
        }
    }
)

filterGraphDesign.addEventListener('click', function () {
    if (filterAll.classList.contains("portfolio__filter--on")) {
        filterAll.classList.toggle('portfolio__filter--on')
        this.classList.toggle('portfolio__filter--on')
        for (let i of webDesign) {
            i.classList.toggle('portfolio__web-design--off')
        }
        for (let i of artwork) {
            i.classList.toggle('portfolio__artwork--off')
        }
    } else {
        this.classList.toggle('portfolio__filter--on')
        for (let i of graphDesign) {
                i.classList.toggle('portfolio__graph-design--off')
            }
        }
    }
)
*/