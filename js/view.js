var ENTER_KEY=13;
var TODO_ID=0;

app.templates.todo=_.template($("#item-template").html())

app.templates.todoCompleted=_.template($("#completed-template").html())

app.templates.todoList=_.template($("#list-template").html());

app.filter='';

app.Views.TodoList=Backbone.View.extend({
	el:$("#todo-list"),
	template: app.templates.todoList,

	initialize:function(){
		app.todoList.bind("reset", this.render);
		app.todoList.bind("add", this.addOne);
	},

	render: function(){
		$(this.el).html(this.template());
		this.addAll();
	},

	addAll: function(){
		app.todoList.each(this.addOne);
	},

	addOne: function (model) {
		switch(app.filter){
			default:
				view = new app.Views.Todo({ model: model });
				app.todoViews.add(view);
				$("ul", this.el).append(view.render());
				break;
			case "completed":
				if (model.get("completed")){
					view = new app.Views.Todo({ model: model });
					app.todoViews.add(view);
					$("ul", this.el).append(view.render());
				}
				break;
			case "active":
				if (!model.get("completed")){
					view = new app.Views.Todo({ model: model });
					app.todoViews.add(view);
					$("ul", this.el).append(view.render());
				}
				break;
		}
	}
});



app.Views.Todo=Backbone.View.extend({
	tagName: "li",

	template:app.templates.todo,
	completedTemplate: app.templates.todoCompleted,

	events: {
		'click .destroy':'delete'	
	},
	
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

app.Views.InputView=Backbone.View.extend({
	el:"#input-todo",
	
	initialize: function(){
		this.$input = this.$('#new-todo');
	},
	
	events:{
		'keypress #new-todo': 'createOnEnter',
	},

	createOnEnter:function(event) {
		if (event.which==ENTER_KEY){
			new app.Models.Todo().save({"title" : this.$input.val()});
			this.$input.val('');
			app.router.refresh();
		}
	},

	newAttributes:function(){
		return {
			id: TODO_ID++,
			title: escape(this.$input.val().trim()),
			completed: false
		}
	}
});

app.inputView=new app.Views.InputView();
app.todoListView= new app.Views.TodoList();
