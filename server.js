var connect = require('connect')
    , http = require('http')
    , app;

app = connect()
	.use(connect.static('app'))
	.use('/js/lib', connect.static('node_modules/requirejs/'))
	.use('/js/lib/text', connect.static('node_modules/text/'))
	.use('/js/bootstrap', connect.static('node_modules/bootstrap/dist/js'))
	.use('/css/bootstrap', connect.static('node_modules/bootstrap/dist/css'))
	.use('/fonts/bootstrap', connect.static('node_modules/bootstrap/dist/fonts'))
	.use('/fonts/custom', connect.static('fonts/Source_Sans_Pro'))
	.use('/js/backbone', connect.static('node_modules/backbone'))
	.use('/js/underscore', connect.static('node_modules/backbone/node_modules/underscore'))
	.use('/node_modules', connect.static('node_modules'));

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});
