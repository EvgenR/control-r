define(['jquery_ui'], function(){
	$(function(){	
		$('a').click(function(){
			var dlgType = $(this).attr('href').substring(1)
		    var dlg = $('.control-r-dialog').attr('class', '').clone()
			$(dlg).find('.control-r-dialog-tabs').tabs()
			$(dlg).dialog({width: 640, height: 480})
			var tab2 = $(dlg).find('.control-r-dialog-tab')[1]
			$(tab2).load(dlgType + '.html', function(dat){
			  require([dlgType])
			})
		})    
	})
})
