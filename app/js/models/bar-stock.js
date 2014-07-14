define(function() {
  var BarStock = Backbone.Model.extend({
    defaults : {
      'vodkaStock' : 750
      , 'ginStock' : 1500
      , 'tequillaStock' : 750
      , 'whiskeyStock' : 750
      , 'sweetVermouthStock' : 750
      , 'dryVermouthStock' : 750
      , 'bloodyMaryStock' : 2000
      , 'agaveNectarStock' : 710
      , 'orangeJuiceStock' : 1420
      , 'limeStock' : 36
      , 'cherryStock' : 9
      , 'celeryStalkStock' : 16
      , 'oliveStock' : 24
    }
  });
  return BarStock;
});
