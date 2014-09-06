define([], function(){
    alert('global switcher');
        var block;
        var on_off_event=null

        function ver(){
            alert('i am all_switcher');
        }
    
    function set_global_onoff(e){
        on_off_event=e;
    }
    
    function global_on_off(st){
      if(on_off_event!=null) {
          on_off_event(st);
      }
    }
    
    function init(dlg){
        block=$(dlg).find('.tab-work .ct-footer');
        $(block).find('.on-off').bind('click',on_off_click);  
        control_set('');
    }
    
function control_set(status){
    var el=$(block).find('.on-off');
        if(status==''){
            status=$(el).attr('data-on');
        }
                 if(status=='off'){
                   $(el).attr('data-on','off');
                   $(el).css({'background-position':'0px -53px'});
                   change_onoff_lamp('off');
                }else{
                   $(el).attr('data-on','on');
                   $(el).css({'background-position':'0px 0px'});
                   change_onoff_lamp('on');
                }              
}
    

    function on_off_click(){
                 if($(this).attr('data-on')=='on'){
                   $(this).attr('data-on','off');
                   $(this).css({'background-position':'0px -53px'});
                   change_onoff_lamp('off');
                   global_on_off('off');
                }else{
                   $(this).attr('data-on','on');
                   $(this).css({'background-position':'0px 0px'});
                   change_onoff_lamp('on');
                   global_on_off('on');
                }          
    }
    
     function change_onoff_lamp(on_in){
//          console.log(typeof(on_in));
                var on;
                var el;                          

         if(typeof on_in =='string')
            {   on=on_in;
                el=$(block).find('.i'); 
            }
            else
            {
                on=$(this).attr('data-on');
                el= $(this);                          
            }
         
        switch(on){
              case'3':
                     el.attr('data-on','0');
                     el.css({'background-position':'-174px'});
                  break;
              case'2':
                     el.attr('data-on','0');
                     el.css({'background-position':'-116px'});
                  break;            
              case'on':
                     el.attr('data-on','0');
                     el.css({'background-position':'-55px'});
                  break;
              case'off':
              default:
                     el.attr('data-on','off');
                     el.css({'background-position':'0px'});                 
                  break;
        }
          
      }
        

    return {
          ver:ver,
          init:init,
          control_set:control_set,
          change_onoff_lamp:change_onoff_lamp,
          set_global_onoff:set_global_onoff
  }
})
