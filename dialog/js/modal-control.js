//alert('Yo!')
define(['jquery_ui'], function(){
  
    function modal(elem) {
       var self = this;

       this.version = '0.1 - 14.08.2014';
       this.name = 'modal';
       
       this.on_off=0;
      //alert(elem.attr('title'));
      
      this.init = function(){
          elem.find( "#tabs" ).tabs();
          elem.find('#tabs a[href="#tabs-2"]').html('<img src="./img/modals_ico/d1.png">');//

        //   alert('1='+this.on_off);
          elem.find('#tabs #onoff1').bind('click',this.change_onoff);
          
           elem.dialog(
           {
                modal: true,
                width: 470,
/*                
            buttons: {
            Ok: function() {
            $( this ).dialog( "close" );
                    }
             }*/
             
            });
      }
      /*
       elem.onclick = function(e) {
           alert(1);
            var target = e && e.target || event.srcElement; // (*)
            console.log(target);
       }
     */ 
    
      this.change_onoff = function(){
          if($(this).attr('data-on')=='0'){
             $(this).attr('data-on','1');
             $(this).css({'background-position':'-44px'});
          }else{
             $(this).attr('data-on','0');
             $(this).css({'background-position':'0px'});

          }
          
      }
      
      this.status =  function(){
          var h=this.name+' ver:'+this.version+'\n\r';
            h+='Состояние:'+(elem.find('#tabs #onoff1').attr('data-on')==1?'вкл':'выкл')+'\n\r';
            h+='ID:'+elem.find('#tabs #id').val()+'\n\r';
            h+='Название:'+elem.find('#tabs #name').val()+'\n\r';
          alert(h);
      };
      
      this.init();
  };
    
    
    $(function(){	
     
     var m = new modal($('div#modal'));
    // m.status();

      $( "button" ).button()
        .click(function( event ) {
       // $('#modal').dialog('open');
       m.status();
      //m.change_onoff();
      });  
   
})
})
