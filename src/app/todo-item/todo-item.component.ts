import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
    editing: boolean = false;
    showValidationErrors: boolean = false;
    @Input() todo!: Todo;
    @Output() todoClicked: EventEmitter<void> = new EventEmitter();
    @Output() editSubmitted: EventEmitter<void> = new EventEmitter();
    @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    OnFormSubmit(form: NgForm) {
        if (form.invalid) this.showValidationErrors = true;
        else {
            this.showValidationErrors = false;
            this.editing = false;
            this.editSubmitted.emit(form.value.title);
        }
    }

    OnTodoClicked() {
        this.todoClicked.emit();
    }

    OnEditClicked() {
        this.editing = true;
        //TODO Focus on input
    }

    OnSaveClicked() {
        //TODO Submit form
    }

    OnDeleteClicked() {
        this.deleteClicked.emit();
    }
}
