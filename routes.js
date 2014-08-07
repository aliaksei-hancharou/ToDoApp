module.exports.setRoutes = function(app, handlers){

	app.get('/filter/:filter', handlers.view);
	
	app.get('/all', handlers.viewAll)
	
	app.post('/', handlers.newTodo);

	app.put('/:id', handlers.complete);

	app.delete('/:id', handlers.delete);

}
