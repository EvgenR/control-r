requirejs.config({
  urlArgs: "bust=" + (new Date()).getTime(),		
  baseUrl: 'js',
  paths: {
	jquery:        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    jquery_ui:     'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
    jquery_mobile: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-mobile/1.4.1/jquery.mobile.min',
  },

  shim: {
    jquery_mobile: {deps: ['jquery']},
    jquery_ui:     {deps: ['jquery_mobile']},
//    jquery_ui:     {deps: ['jquery']},
  }
})

require(['dialog-test'])

