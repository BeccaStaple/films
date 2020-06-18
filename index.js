
function filmElements() {
    const searchBar = document.getElementById("mySearch");
    fetch("http://www.omdbapi.com/?apikey=c9f55179&s=" + searchBar.value)
    .then(res => res.json())
    .then(json => {
        json.Search.forEach(search => {
            const filmOut = document.getElementById("filmOutputDiv");
            const searchDiv = makeFilms("div", "", filmOut, "card w-50 border border-warning m-5");
            filmOut.addEventListener("click", function () {
                window.location = "./details.html?id=" + search.imdbID;
            });
            makeFilms("h3", `Title: ${search.Title}`, searchDiv, "card-title w-50 p-5");
            
            const myImg = document.createElement("img");
            myImg.src = search.Poster;
            searchDiv.appendChild(myImg);
        })
    })
}


function makeFilms(elementType, text, appendTo, className) {
    const element = document.createElement(elementType);
    element.innerText = text;
    appendTo.appendChild(element);
    element.className = className;
    return element;
}


