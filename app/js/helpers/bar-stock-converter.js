define(function() {
  var BarStockConverter = {
    convert : function(json) {
      json['ginStock'] = json['ginStock'] / 1000;
      json['bloodyMaryStock'] = json['bloodyMaryStock'] / 1000;
      json['agaveNectarStock'] =
	parseInt((json['agaveNectarStock'] * 0.033814).toString());
      json['orangeJuiceStock'] =
	parseInt((json['orangeJuiceStock'] * 0.033814).toString());
      return json;
    }
  }
  return BarStockConverter;
});
