define(['text!templates/bartpl.html',
	'views/bar-stock-view',
	'models/bar-stock', 'helpers/drink-maker', 'text!templates/summarytpl.html'],
  function(template, BarStockView, BarStock, DrinkMaker, summaryTpl) {
  var BarTplView = Backbone.View.extend({
    el : '#app-area'

    , template: _.template(template)
    , summaryTemplate: _.template(summaryTpl)

    , events : {
      'click a.plus' : 'add'
      , 'click a.minus' : 'remove'
      , 'click a#place-order' : 'order'
    }

    , initialize : function() {
      this.model.bloodymarycount = 0;
      this.model.martinicount = 0;
      this.model.margaritacount = 0;
      this.model.screwdrivercount = 0;
      this.model.manhattancount = 0;
    }

    , render : function() {
	var $el = $(this.el);
	$el.html(this.template(this.model));
	if (this.model.barStock == null) {
	  this.model.barStock = new BarStock();
	}
	var barStockView = new BarStockView({
	  model : this.model.barStock
	  , el : '#bar-stock'
	}).render();
    }

    , renderSummary : function() {
      var $el = $(this.el);
      $el.html(null);
      $el.html(this.summaryTemplate(this.model));
    }

    , add : function(e) {
      e.preventDefault();
      var elem = $(e.target);
      if (elem.hasClass('disabled')) { return; }
      this.model = DrinkMaker.makeDrink(e, this.model);
      this.render();
      return false;
    }

    , remove : function(e) {
      e.preventDefault();
      var elem = $(e.target);
      this.model = DrinkMaker.removeDrink(e, this.model);
      this.render();
      return false;
    }

    , order : function(e) {
      e.preventDefault();
      this.renderSummary();
      return false;
    }
  });
  return BarTplView;
});
