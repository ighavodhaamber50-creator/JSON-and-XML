async function populate(){

    let updated2 = JSON.parse(owData2);

    let tempC = (updated2.main.temp - 273.15).toFixed(2);
    let feelsC = (updated2.main.feels_like - 273.15).toFixed(2);

    document.getElementById("weather").innerHTML =

    "<h2>" + updated2.name + "</h2>" +

    "<p><b>Country:</b> " + updated2.sys.country + "</p>" +

    "<p><b>Description:</b> " + updated2.weather[0].description + "</p>" +

    "<p><b>Temperature:</b> "
    + updated2.main.temp + " K (" + tempC + " °C)</p>" +

    "<p><b>Feels Like:</b> "
    + updated2.main.feels_like + " K (" + feelsC + " °C)</p>" +

    "<p><b>Humidity:</b> "
    + updated2.main.humidity + "%</p>" +

    "<p><b>Wind Speed:</b> "
    + updated2.wind.speed + " m/s</p>";

}

populate();
