requirejs.config({
  urlArgs: "bust=" + (new Date()).getTime(),		
  baseUrl: 'js',
  paths: {
	jquery:        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    jquery_ui:     'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
    jquery_mobile: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-mobile/1.4.1/jquery.mobile.min',
    mapbox:        'https://api.tiles.mapbox.com/mapbox.js/v1.6.4/mapbox',
    maplabel:      'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-label/v0.2.1/leaflet.label',
  },

  shim: {
    i18n:          {deps: ['jquery']},
    jquery_mobile: {deps: ['jquery']},
    jquery_ui:     {deps: ['jquery_mobile']},
    maplabel:      {deps: ['mapbox']},
  }
})

require(['20_pages'])

