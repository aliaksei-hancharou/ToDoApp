var app={
	Views:{},
	Collections:{},
	Models:{},
	templates:{},
};

app.Models.Todo=Backbone.Model.extend({
	urlRoot : "/",
	
	toggle: function () {
		completed: !this.get('completed')
	}
});
app.Collections.TodoViews=Backbone.Collection.extend({});
app.todoViews=new app.Collections.TodoViews();

