var apiKey = "4a348f6fbab35c14417e4609c071970f";
	  
document.addEventListener('DOMContentLoaded', weatherSubmit);
document.addEventListener('DOMContentLoaded', postSubmit);

function weatherSubmit(){
	document.getElementById('weatherSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var zip = document.getElementById('zipCode').value;
		req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=" + apiKey, true);
		req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var weather = (JSON.parse(req.responseText));
		document.getElementById("mainTemp").innerHTML = weather.main.temp + " degrees F";
		document.getElementById("mainWeather").innerHTML = weather.weather[0].main;
		document.getElementById("wind").innerHTML = weather.wind.speed + " miles/hour";
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
		req.send(null);
		
		event.preventDefault();
	})
}
	  
function postSubmit(){
	document.getElementById('postSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
        var payload = {longUrl:null};
        payload.longUrl = document.getElementById('someText').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				document.getElementById('textResponse').innerHTML = response.json['longUrl'];
				console.log(JSON.parse(req.responseText));
			} else {
				console.log("Error in network request: " + req.statusText);
			}});
		req.send(JSON.stringify(payload));
          
        event.preventDefault();
	})
}