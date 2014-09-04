define(function(){
  $('.ui-panel-inner').each(function(){
	  $('<div class="control-r-wheel-helper">&nbsp;</div>').css('height', '1000px').appendTo(this)
  })
  $('[data-role=panel]').mousewheel(function(e){
	 var panelHeight = $(window).height() - 100
	 var scrollableHeight =  $(this).height() 
	 if(panelHeight > scrollableHeight) return
	 var dy = e.deltaY * e.deltaFactor
	 var marginTop = $(this).css('margin-top').match(/^-?[0-9]+/)[0]
	 marginTop = parseInt(marginTop) + dy
	 if(marginTop >= 0) marginTop = 0
	 $(this).css('margin-top', marginTop + 'px')
  })
})
