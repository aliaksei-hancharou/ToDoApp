app.Router=Backbone.Router.extend({
	routes:{
		"":"defaultRoute",
		"filter/*filter":"filter",
		"complete":"completeSelected",
		"delete/:id":"delete"
	},
	
	defaultRoute:function(){
		app.filter="";
		app.todoListView.render();
	},

	filter:function(param){
		app.filter=param;
		app.todoListView.render();
	},

	delete:function(id){
		app.todoList.remove(app.todoList.get(id));
		this.refresh();
	},

	completeSelected:function(){
		app.todoList.reset();
		$('input[type=checkbox]:checked').each(function () {
				new Todo({'id':this.id}).save();
        });
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
	},
	
	refresh: function(){
		app.todoList.fetch({success : function() {app.todoListView.render()}});
		if (app.filter==='')
			this.navigate("#/",{trigger: true});
		else
			this.navigate("#/filter/"+app.filter);
	}

});

app.router = new app.Router();

Backbone.history.start();
