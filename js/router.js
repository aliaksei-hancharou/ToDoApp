app.Router=Backbone.Router.extend({
	routes:{
		"":"redirect",
		"all":"all",
		"filter/:filter":"filter",
		"complete":"completeSelected",
		"delete/:id":"delete",
	},
	
	redirect:function(){
		if (app.filter==='')
			this.navigate("#/all");
		else
			this.navigate("#/filter/"+app.filter);
	},
	
	all:function(){
		app.filter="";
		this.refresh();
	},

	filter:function(param){
		app.filter=param;
		this.refresh();
	},

	delete:function(id){
		new app.Models.Todo ({"id" : id}).destroy();
		this.redirect();
	},

	completeSelected:function(){
		app.todoList.reset();
		$('input[type=checkbox]:checked').each(function () {
				new app.Models.Todo({'id': this.id}).save();
        });
		this.redirect();
	},
	
	refresh: function(){
		app.todoList.fetch({success : function() {app.todoListView.render()}});
	}

});

app.router = new app.Router();

Backbone.history.start();

$(document).ready(function() {

	$('#input-todo').submit(function(e) {
		var title=$('#new-todo').val();
    	new app.Models.Todo().save({"title" : title});
    	$('#new-todo').val('');
		app.router.refresh();
		return false;
    });

});
