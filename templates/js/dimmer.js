define(function(){
 //GLOBAL
 var G;
 var STORAGE;
 var state; 
  
  //LOCAL  
  var tooltip; 
    
    function init(params, Locstor /* aka Хранилище */){
      G=params; STORAGE=Locstor;
    //var test = params.context.test
    //начальные значения
      state = {
         status: 'off',
         dimmer_val:0,
         level: 50, 
         } // Объект для хранения состояний
	
	 STORAGE.set(G.id, state) // Сохранение в локальном хранилище
        $(G.tabs).find('.work-tab').html('<div class="dimmer-header"></div>');
	local_unit();
          $(G.specialTab).find('.main_switcher .on-off').on('click',on_off);

     render();
	//console.log(G);
  }
  
  function local_unit(){
      
       tooltip = $(G.specialTab).find('.tooltip'); 
         tooltip.hide(); 
      
      $(G.specialTab).find( ".slider" ).slider({
    orientation: "vertical",
            range: "max",
            min: 0,
            max: 100,
            value: state.dimmer_val,
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
  }
  
  
  function repositionTooltip( e, ui){
      
        if(ui.value==0){
                  state.status='off'
        }
        if(ui.value>0){//&& elem.find('.on-off').attr('data-on')=='off'){
            state.status='on'
        }
      
    state.dimmer_val=ui.value;
 
    STORAGE.set(G.id, state);
    render();
    
}
  
  function on_off(){
      state=STORAGE.get(G.id);
  //    console.log(state);
      
      switch(state.status){
          case 'on':{              
              state.status='off'
              state.dimmer_val='0';
                  break;
          }
          case 'off':
          default:{
              state.status='on'
              state.dimmer_val='1';
                      break;
              }
    }
     $(G.specialTab).find( ".slider" ).slider("value",state.dimmer_val);
      STORAGE.set(G.id, state) // Сохранение в локальном хранилище
      render();

  }

       function render(){
        state=STORAGE.get(G.id);
        console.log(state);

        switch(state.status){
            case 'on':{
                $(G.specialTab).find('.main_switcher .on-off').css({'background-position':'0px -45px'});
                $(G.specialTab).find('.main_switcher .i').css({'background-position':'-39px 0px'});
                $(G.specialTab).find('.switcher .jack').css({'background-position':'0px 0px'});

                    break;
            }
            case 'off':
            default:{
                $(G.specialTab).find('.main_switcher .on-off').css({'background-position':'0px 0px'});        
                $(G.specialTab).find('.main_switcher .i').css({'background-position':'-4px 0px'});
                $(G.specialTab).find('.switcher .jack').css({'background-position':'0px -182px'});

                        break;
                }
        }   
        
                      
             var op=state.dimmer_val / 100;
            var pos = 200-state.dimmer_val*1.5;  
            tooltip.css('top', pos).text(state.dimmer_val);  
             $(G.specialTab).find( ".lights_l" ).css({opacity:op});
            $(G.specialTab).find( ".slider" ).attr({'title':state.dimmer_val}); 


  }

    return init;
})