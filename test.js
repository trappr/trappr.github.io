var weatherData;
var stockData;

function getDate() {
  var d = new Date();
  var year = (d.getFullYear()).toString();
  var month = (d.getMonth() + 1).toString();
  var day = (d.getDate()).toString();

  if(month.length <= 1) month = "0" + month;

  if(day.length <= 1) day = "0" + day;

  var datePrev = year + "-" + month + "-" + day;
  return datePrev;
}

fetch('https://api.openweathermap.org/data/2.5/weather?zip=59718,us&APPID=4a348f6fbab35c14417e4609c071970f&units=imperial')
  .then(function(response){return response.json()})
  .then(json => weatherData = json)
  .then(function() {
    var tempElement = document.getElementById('temp');
    tempElement.innerHTML = weatherData.main.temp;
  });

  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INX&interval=5min&apikey=GAEXUJGMNEYZIF2C')
  .then(response => response.json())
  .then(json => stockData = json)
  .then(function() {
    getDate();
    var stockVar = document.getElementById('temp2');
    var datePrev = getDate();
    stockVar.innerHTML = stockData["Time Series (Daily)"][datePrev]["4. close"];
  });