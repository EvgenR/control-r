define(['jquery_ui'], function(){
	$(function(){	
		$('a').click(function(){
			var dlgType = $(this).attr('href').substring(1)
		    var dlg = $('.control-r-dialog').clone()
			$(dlg).dialog()
			$(dlg).find('.control-r-dialog-tabs').tabs()
		})    
	})
})
