define(['geoobjects', 'maplabel', 'jquery_mobile'], function(Geoobjects){
	$.mobile.loading( 'show', {
		text: 'foo',
		textVisible: false,
		theme: 'a',
		html: ""
	});

  //$('body').css('visibility', 'visible')
		
  var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/alexru2014.ia5picp3/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
  });

  var mapDiv = $('#geomap').height($(window).height())[0]		
  var map = L.map(mapDiv, {zoomControl: false}).addLayer(mapboxTiles).setView([Geoobjects.view.lat, Geoobjects.view.lng], Geoobjects.view.zoom);

  var ul = $('#geoobjects ul')

  for(var i in Geoobjects){
      if(i == 'view') continue
	  var val = Geoobjects[i]
	  var li = $('<li></li>').appendTo(ul)
	  $(li).addClass('control-r-icon-' + val.icon)
	  var a = $('<a></a>').appendTo(li)
	  var hash = '#page-' + i
	  $(a).text(val.label).attr('href', hash)
	  var marker = L.marker([val.lat, val.lng]).bindLabel(val.label, {noHide: true}).addTo(map) //.on('click', function(){
//	  setClick(marker, hash)
  }
        
  $(ul).listview('refresh')
	  
})

function setClick(m, h){
  m.on('click', function(){
	window.top.location.hash = h
  })
}
