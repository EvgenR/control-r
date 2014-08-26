define(function(){
 
    function init(dlg){
            //alert('I`am SWITCH - YES');
            //console.log(dlg);
          ///  $(dlg).find('#id').val('1234368');
            $(dlg).find('li:odd').find('div').html('<img src="./img/modals_ico/switcher.png">');
          //  $(dlg).dialog({width: 400, height: 290})

        var elem=$(dlg).find('.control-r-dialog-tab .swicher');
        //  console.log(elem);
            
            elem.find('.on-off').bind('click',change_onoff);
    }
    
           function change_onoff(){
          if($(this).attr('data-on')=='0'){
             $(this).attr('data-on','1');
             $(this).css({'background-position':'0px -71px'});
          }else{
             $(this).attr('data-on','0');
             $(this).css({'background-position':'0px 0px'});

          }
          
      }
     
    return {
        init:init,
    };
});