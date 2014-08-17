define(['jquery_ui'], function(){
	$(function(){	
		$('button').button().click(function(){
			var dlgType = $(this).attr('id')
		    var dlg = $('#control-r-dialog').clone()
			$(dlg).dialog('open')
		})    
	})
})
