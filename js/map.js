function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 0, lng: 0}
  });

  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: {lat: 37.780970, lng: -122.279111}
  });
  marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 20.678333, lng: -88.568889}
	});
   marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 30.328454, lng: 35.444362}
	});
	marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 28.439605, lng: 107.717118}
	});
	marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: -22.951871, lng: -43.211180}
	});
	marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: -13.174709, lng: -72.542006}
	});
	marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 41.890210, lng: 12.492231}
	});

	marker.addListener('click', toggleBounce);
	marker = new google.maps.Marker({
	    map: map,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 27.175015, lng: 78.042155}
	});

}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

var contentString = '<div id="content">' + 
	'<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Taj Mahal</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Taj Mahal</b>,The most perfect jewel of Muslim art in India!
    <img src="images/tajmahal.jpg"></p>

var informationWindow = n google.maps.InfoWindow( {
	content: ".tajmahal"
});

var marker = new google.maps.Marker ( {
	position: {lat: 27.175015, lng: 78.042155}
	map: map
	titile: 'Taj Mahal'
});

marker.addListener('click', function(){
	infowindow.open(map, marker);
});
}