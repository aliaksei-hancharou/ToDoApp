var TodoListView = Backbone.View.extend({

	tagName:  'li',
	el: '#todoapp',

	itemTemplate: _.template($('#item-template').html()),

	events: {
		'keypress #new-todo': 'createOnEnter',
		'click #clear-completed': 'clearCompleted',
		'click #toggle-all': 'toggleAllComplete'
	},

	initialize : function() {
		this.TodoList = new TodoList(todoList.models); 
	},

	render: function () {
        	var that = this;
        	this.$el.empty();
        	_.each(this.filteredTasks.models, function(task) {
            		that.renderTask(task);
        	});  
        	return this;
    	},

	renderTask: function (task) { 
		this.$el.prepend(itemTemplate(task.toJSON()));
		return this;
    	},

});