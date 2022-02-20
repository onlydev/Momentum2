const GEO_LOCATION = "geoLocation"; 

if ("geolocation" in navigator) {
	let geoInfo = JSON.parse(localStorage.getItem(GEO_LOCATION));

  if (!geoInfo) {
    function successGeo(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
  
      const item = {
        lat,
        lon
      };
  
      localStorage.setItem(GEO_LOCATION, JSON.stringify(item));

      getWeatherApi(lat, lon);
    }

		geoInfo = navigator.geolocation.getCurrentPosition(successGeo);
	} else {
		getWeatherApi(geoInfo.lat, geoInfo.lon);
	}
	
} else {
	alert(
		"Please agree to the GEO Location information in your browser to view weather information."
	);
}