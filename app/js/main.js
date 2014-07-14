requirejs.config({
  baseUrl: 'js',

  paths: {
    text : 'lib/text/text'
  },

  shim: {
    'bootstrap/bootstrap' : {}
    , 'underscore/underscore-min' : {
      exports : '_'
    }
    , 'backbone/backbone-min' : {
      deps: ['underscore/underscore-min']
      , exports : 'Backbone'
    }
    , 'app' : {
      deps : ['jquery', 'bootstrap/bootstrap'
	      , 'underscore/underscore-min'
	      , 'backbone/backbone-min']
    }
  }
});

require(['app'], function(App) {
  window.bartender = new App();
});
