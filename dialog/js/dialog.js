define(['dialog-id-listeners', 'jquery_ui'], function(setInputListeners){
	$(function(){	
		$('a').click(function(){
			var dialogType = $(this).attr('href').substring(1)
		    var dlg = $('.control-r-dialog').clone().attr('class', '')
			var randomHrefs = [Math.random(), Math.random()]
			var tabAnchors  = $(dlg).find('ul a') 
			var tabContents = $(dlg).find('.control-r-dialog-tab') 
			for(var i = 0; i < 2; i++){
              $(tabAnchors[i]).attr('href', '#' + randomHrefs[i])
              $(tabContents[i]).attr('id',  '' + randomHrefs[i])
			}
			$(dlg).find('.control-r-dialog-tabs').tabs()
			$(dlg).dialog({width: 640, height: 480})
		    window.dialogCommonTab  = tabContents[0]
		    window.dialogSpecialTab = tabContents[1]
			$(tabContents[1]).load(dialogType + '.html', function(dat){
			  require([dialogType])
			})
		    setInputListeners($(tabContents[0]).find('input'), dlg)
		})    
	})
})
