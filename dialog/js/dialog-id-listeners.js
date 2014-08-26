

define(['equipment'], function(eq){
    
	 function init(inputs, dlg){
		if(!window.equipment) window.equipment = eq
	    var equipment = window.equipment
		var idInput   = inputs[0]	  
		var nameInput = inputs[1]	
                
		$(idInput).keyup(function(){
			if($(idInput).val().length > 20){
                              alert('Каким же надо быть идиотом, чтобы нее справиться с простой задачей забить в текстовое поле с бумажки несколько букв и цифр!')
			  return
			}
                        
			var val = $(idInput).val()
			if(!equipment || !val || !equipment[val]) return false;
			if(equipment[val].marker){alert('Это оборудование уже привязано к маркеру.'); return false}  
		    $(idInput).prop('disabled', true)  
			alert('Красаучег!')
			var title = equipment[val].name
			if(title){ 
                            $(dlg).dialog('option', 'title', title);
                            $(nameInput).val(title);
                                    }
		})
                
                
		$(nameInput).keyup(function(){
			var val = $(nameInput).val().trim()
			if(!val) val = 'Новое устройство'
			$(dlg).dialog('option', 'title', val)
		});
                 
              $(dlg).find( "button" ).button();
              $(dlg).find('.control-r-dialog-tab #onoff1').bind('click',change_onoff);
            
              $(dlg).find('.control-r-dialog-tab .control-long button').bind('click',button_onoff);

            }

            
        function button_onoff(){
            var on=$(this).attr('data-on');
            change_onoff(on);
        }
            
       function change_onoff(on_in){
          //console.log(typeof(on_in));
            var on=$(this).attr('data-on');
            var el= $(this);
          if(typeof on_in =='string'){on=on_in;el=$('.control-r-dialog-tab #onoff1'); }
        switch(on){
              case'3':
                     el.attr('data-on','0');
                     el.css({'background-position':'-174px'});
                  break;
              case'2':
                     el.attr('data-on','0');
                     el.css({'background-position':'-116px'});
                  break;            
              case'1':
                     el.attr('data-on','0');
                     el.css({'background-position':'0px'});
                  break;
              case'0':
              default:
                     el.attr('data-on','1');
                     el.css({'background-position':'-55px'});
                  break;
        }
          
      }
        
       return {
           init:init,
           change_onoff:change_onoff                   
       } 
        
        
})
