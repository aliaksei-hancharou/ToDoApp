app.Collections.TodoList=Backbone.Collection.extend({
	model:app.Models.Todo,

	url : function() {
		if (app.filter==='')
			return '#/';
		else
			return "#/filter/" + app.filter;
	},

	initialize:function(){
		console.log("collection init")
	},
});

app.todoList=new app.Collections.TodoList();

