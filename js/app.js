var Todo = Backbone.Model.extend({
    defaults: {
	title: "",
        completed: false,
    }
});

var TodoList = Backbone.Collection.extend({
    model: Todo
});

var todoList = new TodoList();

var todoListView = new TodoListView();

var todoRouter = new TodoRouter();

$(document).ready(function() {

    $('#text').keypress(function(e) {
        if(e.keyCode==13) {
            todoRouter.addTask();
        }
    });

});