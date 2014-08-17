define(['jquery_ui'], function(){
	$(function(){	
		$('button').button().click(function(){
			var dlgType = $(this).attr('id')
		    $('#control-r-dialog').dialog()
		})    
	})
})
