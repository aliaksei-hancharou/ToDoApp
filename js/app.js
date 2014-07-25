var app={
	Views:{},
	Collections:{},
	Models:{},
	templates:{},
};

app.Models.Todo=Backbone.Model.extend({
	defaults: {
		id:'',
		title: '',
		completed: false
	},
	
	toggle: function () {
		//this.save({
			completed: !this.get('completed')
		//});
	}
});
app.Collections.TodoViews=Backbone.Collection.extend({});
app.todoViews=new app.Collections.TodoViews();