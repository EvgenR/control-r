define(['all_switcher'], function(fc){
  var elem;
  var tooltip; 
  
  var ep=new Array();
  
    function init(dlg){
            //  $(dlg).find('#id').val('1234368');
            //$(dlg).find('div.work-tab').css({'background-image':'/img/modals_ico/dimmer.png'});
            var winx=140;
  
            
            
         fc.init(dlg,2);
         fc.set_global_onoff(this_on_off);
         elem=$(dlg).find('.control-r-dialog-tab .group');
         
         //SturtUP stustus
        ep.push({'id':'1','title':'Зал','onoff':'on','icon':'group_lamp'});
        ep.push({'id':'2','title':'Гараж','onoff':'off','icon':'group_lamp'});
        ep.push({'id':'3','title':'Гараж2','onoff':'off','icon':'group_lamp'});
        ep.push({'id':'4','title':'Гараж3','onoff':'off','icon':'group_lamp'});
        ep.push({'id':'5','title':'Туалет','onoff':'on','icon':'group_lamp'});
         
       //  console.log(ep);
         
         var html='';
          html+='<table>';
          var c_td=0;
          var line=0;
         for(var x in ep){
             if(c_td==0){
                html+='<tr>';
               }
                html+='<td>';
                 html= html+'<div class="group_win"><p>'+ep[x].title+'</p><div class="ico">'+(ep[x].icon!=''?'<img src="/img/modals_ico/'+ep[x].icon+'-'+ep[x].onoff+'.png">':'no icon')+'</div><div class="gswitch"><div class="on-off" data-on="'+ep[x].onoff+'"></div><div class="i"></div></div></div>';
              html+='</td>';
             c_td++;
             if(c_td==4){             
              html+='</tr>';
              c_td=0;
              line++;
             }
         }
         
         if(c_td!=0){
         for(var x=c_td;x<4;x++){
              html+='<td></td>';         
            }
            line++;
              html+='</tr>';
         } 
          html+='</table>';
            if(line==2){
                     $(dlg).dialog({width: 600, height: 560})
                
            }else{
                     $(dlg).dialog({width: 600, height: 350})                
            }
         $(elem).html(html);
         tooltip = $(elem).find('.tooltip'); 
         tooltip.hide(); 
                                
            
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
 
          
    return {
        init:init,
    };
});