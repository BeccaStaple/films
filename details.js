

(function () {
    const params = new URLSearchParams(window.location.Search);
    
    fetch("http://www.omdbapi.com/?apikey=c9f55179&s=" + params.get("imdbID"))
    .then(res => res.json())
    .then(json => {
            const film = json.Search;
            const filmOut = document.getElementById("filmOutputDiv");
            const searchDiv = makeFilms("div", "", filmOut, "card w-50 border border-warning m-5");
            makeFilms("h3", `Title: ${film.Title}`, searchDiv, "card-title w-50 p-5");
            makeFilms("p", `Year: ${film.Year}`, searchDiv, "card-text p-2");
            makeFilms("p", `imdbID: ${film.imdbID}`, searchDiv, "card-text p-2");
            makeFilms("p", `Type: ${film.Type}`, searchDiv, "card-text p-2");

            const myImg = document.createElement("img");
            myImg.src = film.Poster;
            searchDiv.appendChild(myImg);
    })
}) ();


function makeFilms(elementType, text, appendTo, className) {
    const element = document.createElement(elementType);
    element.innerText = text;
    appendTo.appendChild(element);
    element.className = className;
    return element;
}