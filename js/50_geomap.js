define(['21_geoobjects'], function(Geoobjects){
  var mapDiv = $('#geo-map').height($(window).height())[0]		
  L.mapbox.accessToken = 'pk.eyJ1IjoiYWxleHJ1MjAxNCIsImEiOiJJMHQ4NnFRIn0.3BBwGZ_YzX1lGX_yzSjcvg'
  var map = L.mapbox.map(mapDiv, 'alexru2014.jdegnod6').setView([Geoobjects.view.lat, Geoobjects.view.lng], Geoobjects.view.zoom)
  for(var i in Geoobjects){
      if(i == 'view') continue
  	  var val  = Geoobjects[i]
	  var hash = '#page-' + i
	  var marker = L.marker([val.lat, val.lng]).bindLabel(val.label, {noHide: true}).addTo(map)
	  setClick(marker, hash)
  }
  $.mobile.loading('hide')
})

function setClick(m, h){
  m.on('click', function(){
	window.top.location.hash = h
  })
}
