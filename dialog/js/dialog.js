define(['dialog-id-listeners', 'jquery_ui'], function(setInputListeners){
function loadjscssfile(filename, filetype){
    //TODO: Поставить проверку, чтоыб не загружать фалы по 2 раза. Навероно ченрез массив
    
    if (filetype=="js"){ //if filename is a external JavaScript file
         var fileref=document.createElement('script')
         fileref.setAttribute("type","text/javascript")
         fileref.setAttribute("src", filename)
        }
        else if (filetype=="css"){ //if filename is an external CSS file
         var fileref=document.createElement("link")
         fileref.setAttribute("rel", "stylesheet")
         fileref.setAttribute("type", "text/css")
         fileref.setAttribute("href", filename)
        }
        if (typeof fileref!="undefined")
         document.getElementsByTagName("head")[0].appendChild(fileref)
}
	
    
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
		
                    $(dlg).find('li:odd').find('div').html('<img src="./img/dialog/'+dialogType +'.png">');

                    loadjscssfile('templates/css/'+dialogType + ".css", "css");
                    $(tabContents[1]).find('.ct-main').load('templates/'+dialogType + '.html', function(dat){
                        
                        require.config({
                                baseUrl: "templates/js",
                            });
			  require([dialogType], function(templ) {
                              templ.init(dlg)
                                              //  alert("это выполнится только тогда, когда файл  будет загружен");
                                                 })
			})
                   
		    window.dialogCommonTab  = tabContents[0];
		    window.dialogSpecialTab = tabContents[1];
		    setInputListeners.init($(tabContents[0]).find('input'), dlg);
//      		    setInputListeners.sw.ver();

		})    
	})
})
