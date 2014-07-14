define(['views/bar-tpl-view'], function(BarTplView) {
  var App = function() {
    var barTplView = new BarTplView({
      model : {}
    });
    barTplView.render();
  };

  return App;
});
