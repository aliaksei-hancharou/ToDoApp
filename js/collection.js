app.Collections.TodoList=Backbone.Collection.extend({
	model:app.Models.Todo,

	url : function() {
		if (app.filter==='')
			return '/all';
		else
			return "/filter/" + app.filter;
	}
});

app.todoList=new app.Collections.TodoList();

