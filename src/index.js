const filterAll = document.getElementById("all")
const filterArtwork = document.getElementById("artwork")
const filterWebDesign = document.getElementById("web-design")
const filterGraphDesign = document.getElementById("graph-design")
const artwork = document.getElementsByClassName("portfolio__artwork")
const webDesign = document.getElementsByClassName("portfolio__web-design")
const graphDesign = document.getElementsByClassName("portfolio__graph-design")

console.log(filterAll.classList.contains('portfolio__filter--on'))


filterAll.addEventListener('click', function() {
    if ( filterAll.classList.contains('portfolio__filter--on') == false ) {
        this.classList.toggle('portfolio__filter--on')

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
})

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

/*
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
*/