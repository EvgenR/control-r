define(['jquery_mobile'], function(){
	$(function(){	  

	  var geoPageDivs = $('.control-r-hide-on-start')

	  $(geoPageDivs[0]).css('visibility', 'visible')

	  $.mobile.loading( 'show', {
		text: 'foo',
		textVisible: false,
		theme: 'a',
		html: ""
	  });
		  
	  setTimeout(function(){
		$(geoPageDivs).css('visibility', 'visible')
		$.mobile.loading('hide')
		require['50_geomap']
	  }, 2000)
	  
	})
})
