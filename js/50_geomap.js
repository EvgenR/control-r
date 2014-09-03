define(['21_geoobjects'], function(Geoobjects){

  var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/alexru2014.ia5picp3/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
  });

  var mapDiv = $('#geo-map').height($(window).height())[0]		
  var map = L.map(mapDiv, {zoomControl: false}).addLayer(mapboxTiles).setView([Geoobjects.view.lat, Geoobjects.view.lng], Geoobjects.view.zoom);


  for(var i in Geoobjects){
      if(i == 'view') continue
  	  var val  = Geoobjects[i]
	  var hash = '#page-' + i
	  //var marker = L.marker([val.lat, val.lng]).bindLabel(val.label, {noHide: true}).addTo(map) //.on('click', function(){
	  //setClick(marker, hash)
  }
  $.mobile.loading('hide')
})

function setClick(m, h){
  m.on('click', function(){
	window.top.location.hash = h
  })
}
