var page = 1;

function startMirror() {
	page = 1;
	$( "#page-2" ).hide();
	$( "#page-1" ).fadeIn( "slow", null);
}
function stopMirror() {
	$( "#page-1" ).fadeOut( "slow", null);
	$( "#page-2" ).fadeOut( "slow", null);
	$( "#time-and-date" ).fadeOut( "slow", null);
}

startMirror();
//stopMirror();


//the clock and date
function updateClock() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var d = new Date();
	document.getElementById("date").innerHTML = days[d.getDay()]+ ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
	var min = d.getMinutes();
	if (min < 10) {
		min = "0"+min;
	}
	var hour = d.getHours();
    
    if(hour < 12) {
		document.getElementById("welcome").innerHTML = "Good Morning, "+name+"!"
	} else if (hour < 18) {
		document.getElementById("welcome").innerHTML = "Good Afternoon, "+name+"!"
	} else if (hour < 22) {
		document.getElementById("welcome").innerHTML = "Good Evening, "+name+"!"
	} else {
		document.getElementById("welcome").innerHTML = "Good Night, "+name+"!"
	}
    
    // 12 hour clock
    
    if (hour == 0){
    	hour = 12;
    	document.getElementById("am-pm").innerHTML = "AM";
    }
    else if (hour == 12){
    	document.getElementById("am-pm").innerHTML = "PM";
    }
    else if (hour > 12){
        hour = hour-12;
        document.getElementById("am-pm").innerHTML = "PM";
    }
    else{
        document.getElementById("am-pm").innerHTML = "AM";
    }
    
	document.getElementById("time").innerHTML = hour + ":" + min;
	
    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call

 //weather
function updateWeather(){
	//"http://api.openweathermap.org/data/2.5/weather?lat=43.4667&lon=-80.5167&appid="
    $.get("http://api.openweathermap.org/data/2.5/weather?lat=43.8102&lon=-79.3268&appid="+ owmKey, function(data, status){
        document.getElementById("temperature").innerHTML = (Math.round( (data.main.temp - 273.15) * 10)/10) + "°C";
        var minTemp = Math.round( (data.main.temp_min-273.15) * 10)/10;
        var maxTemp = Math.round( (data.main.temp_max-273.15) * 10)/10;
        //document.getElementById("max-min").innerHTML = "  "+ minTemp + "°|" + maxTemp+"°";
        console.log(data + " " + status);
        document.getElementById("weatherDesc").innerHTML = data.weather[0].description;
        document.getElementById("city").innerHTML = data.name;
    });
    // call this function again
    setTimeout(updateWeather, 1200000);
}
updateWeather(); // initial call

//eta
function updateEta(){
	$.get(server + "/api/eta?userKey="+userKey, function(data, status){
		var data = JSON.parse(data);
		document.getElementById("eta").innerHTML = data.routes[0].legs[0].duration.text;
	    document.getElementById("etaHeading").innerHTML = "ETA [TO WORK]";
	});
	// call this function again
    setTimeout(updateEta, 1200000);
}
updateEta();

//news
function updateNews(){
	$.get(server + "/api/news?userKey="+userKey, function(data, status){
		var jsonObj = JSON.parse(data);
		console.log(jsonObj);
		document.getElementById("news1").innerHTML = jsonObj[0].title;
		document.getElementById("news2").innerHTML = jsonObj[1].title;
		document.getElementById("news3").innerHTML = jsonObj[2].title;
	    document.getElementById("newsHeading").innerHTML = "NEWS";
	});
	// call this function again
    setTimeout(updateNews, 1200000);
}
updateNews();
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
