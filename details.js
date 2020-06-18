

(function () {
    const params = new URLSearchParams(window.location.search);
    
    fetch("http://www.omdbapi.com/?apikey=c9f55179&s=" + params.get("Title"))
    .then(res => res.json())
    .then(json => {
        json.Search.forEach(search => {
            const filmOut = document.getElementById("filmOutputDiv");
            const searchDiv = makeFilms("div", "", filmOut, "card w-50 border border-warning m-5");
            makeFilms("h3", `Title: ${search.Title}`, searchDiv, "card-title w-50 p-5");
            makeFilms("p", `Year: ${search.Year}`, searchDiv, "card-text p-2");
    })
   

})

function makeFilms(elementType, text, appendTo, className) {
    const element = document.createElement(elementType);
    element.innerText = text;
    appendTo.appendChild(element);
    element.className = className;
    return element;
}