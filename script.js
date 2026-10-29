const movie = '{"title":"Avengers: Endgame","director":"Anthony and Joe Russo","year":2019}';

let movieInfo = JSON.parse(movie);

let display = document.getElementById("first");

display.innerHTML = movieInfo.title;