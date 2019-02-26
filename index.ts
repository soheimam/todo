

class TodoManager {


    todos: Array < Todo >

        constructor(todos: Array < Todo > ) {
            this.todos = todos
        }

    getCompleted(): Array < Todo > {
        return this.todos.filter(todo => todo.is_completed === true)
    }

    getPending(): Array < Todo > {
        return this.todos.filter(todo => todo.is_completed === false)
    }

    getFirst(): Todo {
        return this.todos[0]
    }

    getLast(): Todo {
        return this.todos[this.todos.length - 1]
    }

    getCount(): number {
        return this.todos.length
    }

    markAsCompleted(title: string): void {
        this.todos.find(todo => todo.title === title).is_completed = true
    }

    add(todo: Todo): void {
        this.todos.push(todo)
    }

    allCompleted() :boolean {
         return this.todos.every(todo => todo.is_completed === true) ;
    }
    allPending(): boolean {
        return this.todos.every( todo => todo.is_completed === false)
    }
    exportCsv(): string {
        return this.todos.map( todo => todo.title).join(', ')
    }
}



class Todo {
    title: string
    is_completed ? : boolean

    constructor(title: string, is_completed : boolean = false) {
        this.title = title;
        this.is_completed = is_completed
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