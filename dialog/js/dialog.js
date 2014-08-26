define(['dialog-id-listeners', 'jquery_ui'], function(setInputListeners){
	$(function(){	
		var equipmentCounter = 1
          //      console.log(setInputListeners);
		$('a').click(function(){
			var dialogType = $(this).attr('href').substring(1)
		    var dlg = $('.control-r-dialog').clone().attr('class', '');
                  //  console.log(dlg);
			var randomHrefs = [Math.random(), Math.random()];
			var tabAnchors  = $(dlg).find('ul a'); 
			var tabContents = $(dlg).find('.control-r-dialog-tab');
			for(var i = 0; i < 2; i++){
                                 $(tabAnchors[i]).attr('href', '#' + randomHrefs[i])
                               $(tabContents[i]).attr('id',  '' + randomHrefs[i])
			}
			$(dlg).find('.control-r-dialog-tabs').tabs()
			
                        $(dlg).dialog({width: 399, height: 330})
			var dlgTitle = $(dlg).dialog('option', 'title') + ' ' + equipmentCounter++
                      $(dlg).dialog('option', 'title', dlgTitle)                       
		
                
                    $(tabContents[1]).load('templates/'+dialogType + '.html', function(dat){
                
                        
                        require.config({
                                baseUrl: "templates/js",
                            });
			  require([dialogType], function(templ) {
                              templ.init(dlg)
                                              //  alert("это выполнится только тогда, когда файл  будет загружен");
                                                 })
			})
                   
		    window.dialogCommonTab  = tabContents[0]
		    window.dialogSpecialTab = tabContents[1]
		    setInputListeners.init($(tabContents[0]).find('input'), dlg)
		})    
	})
})
