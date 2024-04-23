import { AfterContentInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements AfterContentInit{

@Output() addTodo = new EventEmitter<string>();
@ViewChild('form') todoForm!: NgForm;
todoName ='';

addNewTodo(form:NgForm) {

  this.addTodo.emit(this.todoName);
}
ngAfterContentInit(): void {
  console.log(this.todoForm);
}
}
