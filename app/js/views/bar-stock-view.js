define(['text!templates/barstock.html',
	'models/bar-stock', 'helpers/bar-stock-converter'], function(
  template, BarStock, BarStockConverter) {
  var BarStockView = Backbone.View.extend({
    template : _.template(template)

    , events : {}

    , initialize : function() {}

    , render : function() {
	var $el = $(this.el);
	$el.html(this.template(BarStockConverter.convert(this.model.toJSON())));
	return this;
    }
  });
  return BarStockView;
});
