var language = window.navigator.userLanguage || window.navigator.language;
language = language.trim().match(/^[a-z]{2}/)[0]
alert(language)
window.control_r_i18n = {}
var i18nable = $('[data-i18n-title], [data-i18n-text], [data-i18n-placeholder]').each(function(){
  var val = $(this).attr('data-i18n-title') || $(this).attr('data-i18n-text') || $(this).attr('data-i18n-placeholder')
  window.control_r_i18n[val] = val
})
control_r_localize(i18nable)

function control_r_localize(nodes){
  $(nodes).each(function(){
    var key = $(this).attr('data-i18n-title') || $(this).attr('data-i18n-text') || $(this).attr('data-i18n-placeholder')
	var val = window.control_r_i18n[key]
    if($(this).attr('data-i18n-title'))       $(this).attr('title',       val).attr('data-title', val)	
    if($(this).attr('data-i18n-placeholder')) $(this).attr('placeholder', val)	
    if($(this).attr('data-i18n-text'))        $(this).text(val)	
  })
}
	
