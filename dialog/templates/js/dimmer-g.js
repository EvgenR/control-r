define(function(){
  var elem;
  var tooltip; 
  
    function init(dlg){
            //alert('I`am SWITCH - YES');
            //console.log(dlg);
          ///  $(dlg).find('#id').val('1234368');
//            $(dlg).find('div.work-tab').css({'background-image':'/img/modals_ico/dimmer.png'});
         //   $(dlg).dialog({width: 400, height: 290})

         elem=$(dlg).find('.control-r-dialog-tab .dimmer');
         
       
         
         tooltip = $(elem).find('.tooltip'); 
         tooltip.hide(); 
                     

 
$(elem).find( ".slider" ).slider({
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
 
function repositionTooltip( e, ui){
        if(ui.value==0){
            elem.find('.on-off').attr('data-on','on').click();
    }
        if(ui.value>0 && elem.find('.on-off').attr('data-on')=='off'){
            elem.find('.on-off').attr('data-on','off').click();            
        }

    var op=ui.value / 100;
    
    $(elem).find( ".lights_l" ).css({opacity:op});//,-moz-opacity:op,-khtml-opacity:op,filter:'alpha(Opacity='+ui.value+')'});
    $(elem).find( ".slider" ).attr({'title':ui.value }); 
   // console.log(e);
   // var pos =e.clientX;
    var pos = ui.value*2-5;  
    tooltip.css('left', pos).text(ui.value);    
}
    
             function change_onoff(e){
          if($(this).attr('data-on') =='off'){
          $(elem).find( ".lights" ).css({'background-image': 'url(./img/modals_ico/lamp_on.png)'});  
             $(this).attr('data-on','on');
             $(this).css({'background-position':'0px 0px'});
          }else{
             $(elem).find( ".slider" ).slider("value",0);
                      $(elem).find( ".lights" ).css({'background-image':  'url(./img/modals_ico/lamp_off.png)'});  
                       $(elem).find( ".lights_l" ).css({opacity:0})
             $(this).attr('data-on','off');
             $(this).css({'background-position':'0px -71px'});

          }
          
      }
      
    return {
        init:init,
    };
});