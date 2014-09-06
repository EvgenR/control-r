define(['all_switcher'], function(fc){
  var elem;
  var tooltip; 
  
    function init(dlg){
            //  $(dlg).find('#id').val('1234368');
            //$(dlg).find('div.work-tab').css({'background-image':'/img/modals_ico/dimmer.png'});
             $(dlg).dialog({width: 400, height: 335})
  
            
         fc.init(dlg,1);
         fc.set_global_onoff(this_on_off);
         elem=$(dlg).find('.control-r-dialog-tab .dimmer');
         
         
         
         tooltip = $(elem).find('.tooltip'); 
         tooltip.hide(); 
                     

 
$(elem).find( ".slider" ).slider({
    orientation: "vertical",
            range: "max",
            min: 0,
            max: 100,
            value: 0,
            start: function(event,ui) {  
               tooltip.fadeIn('fast');  
            }, 
            slide: function( event, ui ) {
            repositionTooltip( event, ui);

            },
            stop:function( event, ui ) {
                  tooltip.fadeOut('fast');  
            }
            });
            

        
        elem.find('.on-off').bind('click',change_onoff).attr('data-on','on').click();            
            
    };
    
    function this_on_off(st){ //глобальный выключатель
        if(st =='on'){
           $(elem).find( ".lights" ).css({'background-image': 'url(./img/modals_ico/lamp_on.png)'});  
          };
          if(st =='off'){
             $(elem).find( ".slider" ).slider("value",0);
            $(elem).find( ".lights" ).css({'background-image':  'url(./img/modals_ico/lamp_off.png)'});  
            $(elem).find( ".lights_l" ).css({opacity:0})
          }
    }
 
function repositionTooltip( e, ui){
        if(ui.value==0){
          fc.control_set('off');
            $(elem).find( ".lights" ).css({'background-image':  'url(./img/modals_ico/lamp_off.png)'});  
            $(elem).find( ".lights_l" ).css({opacity:0})
          
        }
        if(ui.value>0){//&& elem.find('.on-off').attr('data-on')=='off'){
           fc.control_set('on');
           $(elem).find( ".lights" ).css({'background-image': 'url(./img/modals_ico/lamp_on.png)'});  
        }



    var op=ui.value / 100;
    
    $(elem).find( ".lights_l" ).css({opacity:op});//,-moz-opacity:op,-khtml-opacity:op,filter:'alpha(Opacity='+ui.value+')'});
    $(elem).find( ".slider" ).attr({'title':ui.value }); 
   // console.log(e);
   // var pos =e.clientX;
    var pos = 200-ui.value*1.5;  
    tooltip.css('top', pos).text(ui.value);    
}
    
             function change_onoff(e){
      }
      
    return {
        init:init,
    };
});