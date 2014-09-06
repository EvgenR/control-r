define(['all_switcher'], function(fc){
    var elem;
    var tabs;
    var dlg;


    function init(d){
            //console.log(dlg);
        dlg=d;
          ///  $(dlg).find('#id').val('1234368');
            $(dlg).dialog({width: 655, height: 515})
        fc.init(dlg,1);         
        elem=$(dlg).find('.control-r-dialog-tab .meteo');
        tabs=$(dlg).find('.control-r-dialog-tabs');
    //    addTab();
        
           var line = new RGraph.Line({
                id: 'cvs',
                data: [-14,-5,-25,-20,0,4,10,15,25,5,0,-10],
                options: {
                    labels: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
                    text:{size:5},
                    colors: ['red'],
                    shadow: {
                        offsetx: 1,
                        offsety: 1,
                        color: '#aaa',
                        blur: 5
                    },
                    linewidth: 2,
                    yaxispos: 'left',
                    xaxispos: 'center',
                    hmargin: 0
                }
            })
            RGraph.ISOLD ? line.draw() : line.trace2();
        //  console.log(elem);
            
    }
    
 // actual addTab function: adds new tab using the input from the form above
function addTab() {
          $(dlg).find('li.x3').find('div.work-tab2').html('<img src="./img/dialog/dimmer.png">');
        var tabTemplate = '<li class="x3"><a href="#"><div class="tab-z work-tab2"></div></a></li>';
        var tabContentHtml = " TAB content.";
        tabs.find( ".ui-tabs-nav" ).append( tabTemplate );
        tabs.append( "<div class='control-r-dialog-tab tab-work2'>" + tabContentHtml + "</div>" );
        tabs.tabs( "refresh" );
}

  
    return {
        init:init,
    };
});