var weatherData;

fetch('https://api.openweathermap.org/data/2.5/weather?zip=59718,us&APPID=4a348f6fbab35c14417e4609c071970f&units=imperial')
  .then(function(response){return response.json()})
  .then(json => weatherData = json)
  .then(function() {
    var tempElement = document.getElementById('temp');
    tempElement.innerHTML = weatherData.main.temp;
  });



/* document.addEventListener('DOMContentLoaded', function(event) {
  var tempElement = document.getElementById('temp');
  tempElement.innerHTML = weatherData.main.temp;
}) */