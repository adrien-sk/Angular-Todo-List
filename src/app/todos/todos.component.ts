import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    todos!: Todo[];
    showValidationErrors: boolean = false;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.todos = this.dataService.GetAllTodos();
    }

    OnFormSubmit(form: NgForm) {
        if (form.invalid) this.showValidationErrors = true;
        else {
            this.dataService.AddTodo(new Todo(form.value.title));
            this.showValidationErrors = false;
            form.reset();
        }
    }

    ToggleCompleted(todo: Todo) {
        todo.completed = !todo.completed;
    }

    EditTodo(todo: Todo, title: void) {
        this.dataService.EditTodo(
            this.todos.indexOf(todo),
            new Todo(String(title), todo.completed)
        );
    }

    DeleteTodo(todo: Todo) {
        this.dataService.DeleteTodo(this.todos.indexOf(todo));
    }
}
