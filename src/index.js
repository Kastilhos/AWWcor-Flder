const filterAll = document.getElementById("all")
const filterArtwork = document.getElementById("artwork")
const filterWebDesign = document.getElementById("web-design")
const filterGraphDesign = document.getElementById("graph-design")
const artwork = document.getElementsByClassName("portfolio__artwork")
const webDesign = document.getElementsByClassName("portfolio__web-design")
const graphDesign = document.getElementsByClassName("portfolio__graph-design")

/*
filterAll.addEventListener('click', function() {
    if ( document.getElementById("All").classList.contains('portfolio__filter--off') )
})
*/
filterArtwork.addEventListener('click', function () {
    if (filterAll.classList.contains("portfolio__filter--on")) {
        filterAll.classList.toggle('portfolio__filter--on')
        this.classList.toggle('portfolio__filter--on')
        for (let i of artwork) {
            for (let i of graphDesign) {
                i.classList.toggle('portfolio__graph-design--off')
            }
            for (let i of webDesign) {
                i.classList.toggle('portfolio__web-design--off')
            }
        }
    } else {
        this.classList.toggle('portfolio__filter--on')
        for (let i of artwork) {
            for (let i of graphDesign) {
                i.classList.toggle('portfolio__graph-design--off')
            }
            for (let i of webDesign) {
                i.classList.toggle('portfolio__web-design--off')
            }
        }
    }
}
)

filterWebDesign.addEventListener('click', function () {
    if (filterAll.classList.contains("portfolio__filter--on")) {
        filterAll.classList.toggle('portfolio__filter--on')
        this.classList.toggle('portfolio__filter--on')
        for (let i of artwork) {
            i.classList.toggle('portfolio__artwork--off')
            }
        for (let i of graphDesign) {
            i.classList.toggle('portfolio__graph-design--off')
            }
    } else {
        this.classList.toggle('portfolio__filter--on')
        for (let i of artwork) {
            i.classList.toggle('portfolio__artwork--off')
            }
        for (let i of graphDesign) {
            i.classList.toggle('portfolio__graph-design--off')
            }
    }
})

filterGraphDesign.addEventListener('click', function () {
    if (filterAll.classList.contains("portfolio__filter--on")) {
        filterAll.classList.toggle('portfolio__filter--on')
        this.classList.toggle('portfolio__filter--on')
        for (let i of artwork) {
            i.classList.toggle('portfolio__artwork--off')
            }
        for (let i of webDesign) {
            i.classList.toggle('portfolio__web-design--off')
        }
    } else {
        this.classList.toggle('portfolio__filter--on') 
        for (let i of artwork) {
            i.classList.toggle('portfolio__artwork--off')
            }
        for (let i of webDesign) {
            i.classList.toggle('portfolio__web-design--off')
        }
    }
})