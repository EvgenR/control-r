define(['jquery_ui'], function(){
	$(function(){	
		$('a').click(function(){
			var dlgType = $(this).attr('href').substring(1)
		    var dlg = $('.control-r-dialog').clone()
			var tabs = $('.control-r-dialog-tabs').tabs()
			$(dlg).dialog()
			alert(dlgType)
		})    
	})
})
