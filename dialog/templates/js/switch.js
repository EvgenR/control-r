define(['all_switcher'], function(fc){
 
    function init(dlg){
            //console.log(dlg);
          ///  $(dlg).find('#id').val('1234368');
          //  $(dlg).dialog({width: 400, height: 290})
            fc.init(dlg,1);         
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