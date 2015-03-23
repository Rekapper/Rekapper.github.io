// JavaScript Document

var map = null;

window.onload=getCurrentLocation;

function getCurrentLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation,displayError);
	}
	else {
		alert("Sorry - Your device does not geolocate!");
	}
}

function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("myLocation");
	div.innerHTML = "Latitude: "+latitude.toFixed(4) + ", Longitude: " + longitude.toFixed(4);
	
	showMap(position.coords);
}

function showMap(coords){
	var googleLatLng = new google.maps.LatLng(coords.latitude,coords.longitude);
	var mapOptions = { zoom:10, center: googleLatLng, mapTypeId: google.maps.MapTypeId.ROADMAP };
	var mapDiv = document.getElementById("theMap");
	
	map = new google.maps.Map(mapDiv, mapOptions);
	
	var mTitle = "Your Location";
	var mContent = "You are here: "+coords.latitude + ", "+coords.longitude;
	addMarker(map,googleLatLng, mTitle, mContent);
}

function addMarker(map, googleLatLng, mTitle, mContent){
	var markerOptions = { position: googleLatLng, map: map, title:mTitle, clickable:true};
	var marker = new google.maps.Marker(markerOptions);
	var infoWindowOptions = { content: mContent, position: googleLatLng};
	
	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	
	google.maps.event.addListener(marker,'click',function(){
		infoWindow.open(map);
	});
}

function displayError(error){
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2){
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("myLocation");
	div.innerHTML = errorMessage;
}
