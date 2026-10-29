let owData2 = `
{
  "coord":{"lon":-0.1257,"lat":51.5085},

  "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],

  "base":"stations",

  "main":{
    "temp":294.21,
    "feels_like":294.64,
    "temp_min":293.15,
    "temp_max":295.53,
    "pressure":1021,
    "humidity":87,
    "sea_level":1021,
    "grnd_level":1017
  },

  "visibility":10000,

  "wind":{
    "speed":1.79,
    "deg":76,
    "gust":2.68
  },

  "clouds":{"all":7},

  "dt":1782199724,

  "sys":{
    "type":2,
    "id":2075535,
    "country":"GB",
    "sunrise":1782186212,
    "sunset":1782246103
  },

  "timezone":3600,

  "id":2643743,

  "name":"London",

  "cod":200
}
`;

async function populate() {
    let updated2 = JSON.parse(owData2);
    console.log(updated2);
}

populate();