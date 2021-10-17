import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    todos: Todo[] = [
        new Todo('Lorem ipsum 1 test'),
        new Todo('Second lipsum testing true', true),
        new Todo('Third one ...'),
    ];

    constructor() {}

    GetAllTodos() {
        return this.todos;
    }

    AddTodo(todo: Todo) {
        this.todos.push(todo);
    }

    EditTodo(index: number, todo: Todo) {
        this.todos[index] = todo;
    }

    DeleteTodo(index: number) {
        this.todos.splice(index, 1);
    }
}
