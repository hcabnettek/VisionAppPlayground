var express = require('express'),
	http = require('http'),
	config = require('../configuration'),
	db = require('../db'),
	routes = require('../routes'),
	id = require('../middleware/id'),
	notFound = require('../middleware/notFound'),
	cons = require('consolidate'),
	path = require('path'),
	app = express();


app.set('port', config.get("express:port"));
app.use(express.logger({ immediate: true, format: 'dev'}));
app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', 'views');
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static('public'));
app.use(express.static('public/components'));
app.use('/bootstrap', express.static('public/components/bootstrap/docs/assets/css'));


app.param('id', id.validate);
app.get('/', routes.home.index);
app.get('/heartbeat', routes.heartbeat.index);
app.post('/project', routes.project.post);
app.get('/project', routes.project.all);
app.get('/project/:id', routes.project.get);
app.put('/project/:id', routes.project.put);
app.del('/project/:id', routes.project.del);
app.get('/project/:id/repos', routes.github.repos);
app.get('/project/:id/commits', routes.github.commits);
app.get('/project/:id/issues', routes.github.issues);



app.use(notFound.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;