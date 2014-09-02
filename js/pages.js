define(['geoobjects'], function(Geoobjects){
	var ul = $('#geo-objects ul')
	for(i in Geoobjects){
		if(i == 'view') continue
		var val = Geoobjects[i]
		var li = $('<li></li>').appendTo(ul)
		var hash = '#page-' + i
		$(li).addClass('control-r-icon').addClass('control-r-icon-' + val.icon)
		$('<a></a>').appendTo(li).text(val.label).attr('href', hash)
	}
})
