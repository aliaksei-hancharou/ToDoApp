app.Collections.TodoList=Backbone.Collection.extend({
	model:app.Models.Todo,

	initialize:function(){
		console.log("collection init")
	},
});

app.todoList=new app.Collections.TodoList();

