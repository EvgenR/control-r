define(function(){
	$('[data-eqgrp] a').each(function(){
	  var li = $(this).parent()
	  var eqgrp = $(li).attr('data-eqgrp')
	  $(li).addClass('control-r-icon-link').addClass('control-r-icon-' + eqgrp) 
	  $(this).draggable({helper: 'clone', appendTo: 'body', revert: true})
	})
})
