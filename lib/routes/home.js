exports.index = function(req, res){

	var model = {
		title: 'vision.',
		description: 'a project based dashboard for github',
		author: 'Foo',
		user: 'ck',
	};

	res.render('index', model);
};