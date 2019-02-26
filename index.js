class TodoManager {
    constructor(todos) {
        this.todos = todos;
    }
    getCompleted() {
        return this.todos.filter(todo => todo.is_completed === true);
    }
    getPending() {
        return this.todos.filter(todo => todo.is_completed === false);
    }
    getFirst() {
        return this.todos[0];
    }
    getLast() {
        return this.todos[this.todos.length - 1];
    }
    getCount() {
        return this.todos.length;
    }
    markAsCompleted(title) {
        this.todos.find(todo => todo.title === title).is_completed = true;
    }
    add(todo) {
        this.todos.push(todo);
    }
    allCompleted() {
        return this.todos.every(todo => todo.is_completed === true);
    }
    allPending() {
        return this.todos.every(todo => todo.is_completed === false);
    }
    exportCsv() {
        return this.todos.map(todo => todo.title).join(', ');
    }
}
class Todo {
    constructor(title, is_completed = false) {
        this.title = title;
        this.is_completed = is_completed;
    }
}
const initialTodos = [{
        title: "Learn JavaScript",
        is_completed: true
    }, {
        title: "Practice flashcards",
        is_completed: false
    }];
const todoManager = new TodoManager(initialTodos);
console.log(todoManager.getCompleted()); //returns completed todos
console.log(todoManager.getPending()); //returns todos that are not completed
console.log(todoManager.getFirst());
console.log(todoManager.getLast());
console.log(todoManager.getCount());
todoManager.markAsCompleted("Practice flashcards");
todoManager.add({
    title: "Recap flashcards",
    is_completed: true
});
//when is_completed is not defined, it should default to false
todoManager.add({
    title: "Get some rest"
});
console.log(todoManager.allCompleted()); //returns true when all todo items are completed
console.log(todoManager.allPending()); //returns true when all todo items are pending
console.log(todoManager.exportCsv());
