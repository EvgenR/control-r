define(function(){
 var G;
 var STORAGE;
 var state; 
 
    
    function init(params, Locstor /* aka Хранилище */){
	//console.log(params);
      G=params; STORAGE=Locstor;
    //var test = params.context.test
    //начальные значения
      state = {
         status: 'off',
         level: 50, 
         display:'Москва<br>Влажность    89%<br>Ветер           Ю<br>Температура 27 с<br>Давление      760<br>'
         } // Объект для хранения состояний
	
        $(G.dialog).dialog({width: 655, height: 515})
	 STORAGE.set(G.id, state) // Сохранение в локальном хранилище
        $(G.tabs).find('.work-tab').html('<div class="meteo-header"></div>');
        local_unit();
        
        $(G.specialTab).find('.main_switcher .on-off').on('click',on_off);
       //    alert('0');
        render();
	console.log(G);
  }
  
  function local_unit(){
        addTab();
      
  }
  
  function init_secondTab(){
        $(G.secondTab).find('.main_switcher .on-off').on('click',on_off);    
                
  }
  
  function on_off(){
      state=STORAGE.get(G.id);
//      console.log(state);
      
      switch(state.status){
          case 'on':{              
              state.status='off'
                  break;
          }
          case 'off':
          default:{
              state.status='on'
                      break;
              }
    }
      STORAGE.set(G.id, state) // Сохранение в локальном хранилище
      render();

  }
      function render(){
        state=STORAGE.get(G.id);
        console.log(state);
        switch(state.status){
            case 'on':{
                $(G.specialTab).find('.meteo .dis').html(state.display);
                
                $(G.tabs).find('.main_switcher .on-off').css({'background-position':'0px -45px'});
                $(G.tabs).find('.main_switcher .i').css({'background-position':'-39px 0px'});
                    break;
            }
            case 'off':
            default:{
                $(G.specialTab).find('.meteo .dis').html('');

                $(G.tabs).find('.main_switcher .on-off').css({'background-position':'0px 0px'});        
                $(G.tabs).find('.main_switcher .i').css({'background-position':'-4px 0px'});
                        break;
                }
        }    
  }
  
  
  
   function addTab() {
        var tabTitle = $( "#tab_title" ),
        tabContent = $( "#tab_content" ),
        tabTemplate = "<li><a href='#{href}'>#{label}</a></li>";
       
        var label =  "<div class='tab-z work-tab-2'><div class='meteo-header-2'></div></div>" ;
        var id = "tabs-meteo-2";
        var li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) );
        tabContentHtml = "Tab " +  " content.";
        $(G.tabs).find( ".ui-tabs-nav" ).append( li );
        $(G.tabs).append( "<div class='control-r-dialog-tab' id='" + id + "'></div>" );
        $(G.tabs).tabs( "refresh" );
        G.secondTab=$(G.tabs).find('div#'+id);
        $(G.secondTab).load('../../../templates/meteo-tab2.html',{}, 
        function(){
            init_secondTab();
        }
                );

}

    return init;
})