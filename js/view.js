var ENTER_KEY=13;
var TODO_ID=0;

app.templates.todo=_.template($("#item-template").html())

app.templates.todoCompleted=_.template($("#completed-template").html())

app.templates.todoList=_.template($("#list-template").html());

app.filter='';

app.Views.TodoList=Backbone.View.extend({
	el:$("#todo-list"),
	template: app.templates.todoList,

	addAll: function(){
		app.todoList.each(this.addOne);
	},

	render: function(){
		$(this.el).html(this.template());
		this.addAll();
	},

	addOne: function (model) {
		view = new app.Views.Todo({ model: model });
		app.todoViews.add(view);
		$("ul", this.el).append(view.render());
	}
});



app.Views.Todo=Backbone.View.extend({
	tagName: "li",

	template:app.templates.todo,
	completedTemplate: app.templates.todoCompleted,
	
	initialize: function(){
		this.model.bind('destroy', this.destroyItem, this);
		this.model.bind('remove', this.removeItem, this);
	},

	delete: function(){
		this.model.destroy();
	},

	render: function () {
		if (!this.model.get("completed"))
			return $(this.el).append(this.template(this.model.toJSON()));
		else
			return $(this.el).append(this.completedTemplate(this.model.toJSON()));
	}
});

app.todoListView= new app.Views.TodoList();


