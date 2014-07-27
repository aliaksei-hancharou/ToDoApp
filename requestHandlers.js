var todoList = [],
    _ = require('underscore');

module.exports.newTask = function(req, res) {

	console.log("POST");
	todoList.push({
		"id" : todoList.length, 
		"title" : req.body.name, 
		"completed" : false
		});
	res.end();

} ;

module.exports.complete = function(req, res) {

	console.log("PUT");
	var id = req.params.id;
	todoList[id].completed = true;
	res.end();

};

module.exports.filter = function(req, res) {

	console.log("GET");
	var filter = req.params.filter;
	var sortedList = [];
	_.each(todoList, function(todo){
		if(todo.completed === (filter==='completed')) {
			sortedList.push(todo);
		}
	});
	res.send(sortedList);

};


module.exports.delete = function(req, res) {

	console.log("DELETE");
	var id = req.params.id;	
	delete todoList[id];
	res.end();
};
