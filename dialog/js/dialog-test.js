define(['jquery_ui'], function(){
	$(function(){	
		$('button').click(function(){
			var dlgType = $(this).attr('id')
		    //var dlg = $('#control-r-diaog').clone()
		    var dlg = $('#control-r-diaog').dialog()
			//$(dlg).dialog('open')
		})    
	})
})
