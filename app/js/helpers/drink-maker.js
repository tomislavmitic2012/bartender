define(function() {
  var DrinkMaker = {
    makeDrink : function(e, model) {
      var self = this;
      var drinkType = $(e.target).attr('data-drink');
      var barStock = model.barStock;
      switch(drinkType) {
	case 'bloodymary' :
	  var vodka = barStock.get('vodkaStock');
	  var bloodymary = barStock.get('bloodyMaryStock');
	  var cellery = barStock.get('celeryStalkStock');
	  if (vodka >= 59 && bloodymary >= 118 && cellery >= 1) {
	    barStock.set('vodkaStock', vodka - 59);
	    barStock.set('bloodyMaryStock', bloodymary - 118);
	    barStock.set('celeryStalkStock', cellery - 1);
	    model.bloodymarycount += 1;
	  }
	  break;
	case 'martini' :
	  var gin = barStock.get('ginStock');
	  var dryvermouth = barStock.get('dryVermouthStock');
	  var olive = barStock.get('oliveStock');
	  if (gin >= 59 && dryvermouth >= 30 && olive >= 1) {
	    barStock.set('ginStock', gin - 59);
	    barStock.set('dryVermouthStock', dryvermouth - 30);
	    barStock.set('oliveStock', olive - 1);
	    model.martinicount += 1;
	  }
	  break;
	case 'margarita' :
	  var tequilla = barStock.get('tequillaStock');
	  var orangejuice = barStock.get('orangeJuiceStock');
	  var agavenectar = barStock.get('agaveNectarStock');
	  var lime = barStock.get('limeStock');
	  if (tequilla >= 59 && orangejuice >= 30 &&
	      agavenectar >= 30 && lime >= 1) {
	    barStock.set('tequillaStock', tequilla - 59);
	    barStock.set('orangeJuiceStock', orangejuice - 30);
	    barStock.set('agaveNectarStock', agavenectar - 30);
	    barStock.set('limeStock', lime - 1);
	    model.margaritacount += 1;
	  }
	  break;
	case 'screwdriver' :
	  var vodka = barStock.get('vodkaStock');
	  var orangejuice = barStock.get('orangeJuiceStock');
	  if (vodka >= 59 && orangejuice >= 118) {
	    barStock.set('vodkaStock', vodka - 59);
	    barStock.set('orangeJuiceStock', orangejuice - 118);
	    model.screwdrivercount += 1;
	  }
	  break;
	case 'manhattan' :
	  var whiskey = barStock.get('whiskeyStock');
	  var sweetvermouth = barStock.get('sweetVermouthStock');
	  var cherry = barStock.get('cherryStock');
	  if (whiskey >= 59 && sweetvermouth >= 30 && cherry >= 1) {
	    barStock.set('whiskeyStock', whiskey - 59);
	    barStock.set('sweetVermouthStock', sweetvermouth - 30);
	    barStock.set('cherryStock', cherry - 1);
	    model.manhattancount += 1;
	  }
	  break;
      };
      model.barStock = barStock;
      return model;
    }

    , removeDrink : function(e, model) {
      var self = this;
      var drinkType = $(e.target).attr('data-drink');
      var barStock = model.barStock;
      switch(drinkType) {
	case 'bloodymary' :
	  model.bloodymarycount -= 1;
	  var vodka = barStock.get('vodkaStock');
	  var bloodymary = barStock.get('bloodyMaryStock');
	  var cellery = barStock.get('celeryStalkStock');
	  barStock.set('vodkaStock', vodka + 59);
	  barStock.set('bloodyMaryStock', bloodymary + 118);
	  barStock.set('celeryStalkStock', cellery + 1);
	  break;
	case 'martini' :
	  model.martinicount -= 1;
	  var gin = barStock.get('ginStock');
	  var dryvermouth = barStock.get('dryVermouthStock');
	  var olive = barStock.get('oliveStock');
	  barStock.set('ginStock', gin + 59);
	  barStock.set('dryVermouthStock', dryvermouth + 30);
	  barStock.set('oliveStock', olive + 1);
	  break;
	case 'margarita' :
	  model.margaritacount -= 1;
	  var tequilla = barStock.get('tequillaStock');
	  var orangejuice = barStock.get('orangeJuiceStock');
	  var agavenectar = barStock.get('agaveNectarStock');
	  var lime = barStock.get('limeStock');
	  barStock.set('tequillaStock', tequilla + 59);
	  barStock.set('orangeJuiceStock', orangejuice + 30);
	  barStock.set('agaveNectarStock', agavenectar + 30);
	  barStock.set('limeStock', lime + 1);
	  break;
	case 'screwdriver' :
	  model.screwdrivercount -= 1;
	  var vodka = barStock.get('vodkaStock');
	  var orangejuice = barStock.get('orangeJuiceStock');
	  barStock.set('vodkaStock', vodka + 59);
	  barStock.set('orangeJuiceStock', orangejuice + 118);
	  break;
	case 'manhattan' :
	  model.manhattancount -= 1;
	  var whiskey = barStock.get('whiskeyStock');
	  var sweetvermouth = barStock.get('sweetVermouthStock');
	  var cherry = barStock.get('cherryStock');
	  barStock.set('whiskeyStock', whiskey - 59);
	  barStock.set('sweetVermouthStock', sweetvermouth - 30);
	  barStock.set('cherryStock', cherry - 1);
	  break;
      };
      model.barStock = barStock;
      return model;
    }
  };
  return DrinkMaker
});
