var todoList = [],
    _ = require('underscore');

module.exports.newTodo = function(req, res) {
	todoList.push({
		"id" : todoList.length, 
		"title" : req.body.title, 
		"completed" : false
		});
	res.end();

} ;

module.exports.complete = function(req, res) {
	var id = req.params.id;
	todoList[id].completed = true;
	res.end();

};

module.exports.view = function(req, res) {
	var filter =req.params.filter;
	var sortedList = [];
	_.each(todoList, function(todo){
		if(todo.completed == (filter=='completed')){
			sortedList.push(todo);
		}
	});
	res.send(sortedList)
};

module.exports.viewAll = function(req, res) {
	var sortedList = [];
	_.each(todoList, function(todo){
		sortedList.push(todo);
	});
	res.send(sortedList)
};
module.exports.delete = function(req, res) {
	var id = req.params.id;	
	delete todoList[id];
	res.end();
};
