let weatherData;
let stockData;

function getDate() {
  let d = new Date();
  let year = (d.getFullYear()).toString();
  let month = (d.getMonth() + 1).toString();
  let day = (d.getDate()).toString();

  if(month.length <= 1) month = "0" + month;

  if(day.length <= 1) day = "0" + day;

  let datePrev = year + "-" + month + "-" + day;
  return datePrev;
}

fetch('https://api.openweathermap.org/data/2.5/weather?zip=59718,us&APPID=4a348f6fbab35c14417e4609c071970f&units=imperial')
  .then(function(response){return response.json()})
  .then(json => weatherData = json)
  .then(function() {
    let tempElement = document.getElementById('temp');
    tempElement.innerHTML = weatherData.main.temp;
  });