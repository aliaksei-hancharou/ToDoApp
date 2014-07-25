app.Router=Backbone.Router.extend({
	routes:{
		"":"defaultRoute",
		"filter/*filter":"filter",
		"complete":"completeSelected",
		"delete/:id":"delete"
	},
	
	defaultRoute:function(){
		app.filter="all";
		app.todoListView.render();
	},

	filter:function(param){
		app.filter=param;
		app.todoListView.render();
	},

	delete:function(id){
		app.todoList.remove(app.todoList.get(id));
		this.navigate("/",{trigger: true});
	},

	completeSelected:function(){
		var that = this;
		$('input[type=checkbox]:checked').each(function () {
			that.complete(this.id);
        	});
		this.navigate("/",{trigger: true});
		this.isSelected = false;
		return this;
	},

	complete: function(id){
		_.each(app.todoList.models, function(task) {
			console.log(task.get('id'))
			if(task.get('id') == id) {
				task.set("completed", true);
			}
		});
		this.isSelected = false;
        	return this;
	}

});

app.router = new app.Router();

Backbone.history.start();