define(['geoobjects', 'jquery'], function(Geoobjects){
	var geoPage = $('#geo-page')
	var ul = $('#geo-objects ul')
	var pageTempl = $('.page-template')[0]
	for(i in Geoobjects){
		if(i == 'view') continue
		var val = Geoobjects[i]
		var li = $('<li></li>').appendTo(ul)
		var hash = 'page-' + i
		$(li).addClass('control-r-icon').addClass('control-r-icon-' + val.icon)
		$('<a></a>').appendTo(li).text(val.label).attr('href', '#' + hash)
		var page = $(pageTempl).clone().insertAfter(geoPage).attr('id', hash)
		var panels  = $(page).find('[data-role=panel]')
		var anchors = $(page).find('div[data-role=header] a')
		for(j = 0; j < 2; j++){
		  var id = $(panels[j]).attr('id')
		  $(panels[j]).attr('id', id + '-' + i)
		  $(anchors[j]).attr('href', '#' + id + '-' + i)
		}
	}
	require(['i18n'])
})
