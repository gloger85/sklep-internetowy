import { Component, OnChanges, SimpleChanges, Input, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges, AfterViewInit, AfterViewChecked {

  @Input() test!: string;
  @ViewChild(TodoComponent) todoComp!: TodoComponent;
  @ViewChildren(TodoComponent) todoComps!: TodoComponent;

  todos: Todo[] = this.todoService.todos;
  errorMessage = "";
  testSwitchCase = "tak";

  constructor(private todoService: TodoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit(): void {
    console.log ('ngAfterViewInit was triggered ' + this.todoComp);
  }

  ngAfterViewChecked(): void {
    console.log ('ngAfterViewChecked was triggered ' + this.todoComp);
  }

  clearErrorMessage (){
    this.errorMessage = '';
  }

  addTodo(todo:string): void{
    if(todo.length <=3){
      this.errorMessage = "Zadanie powinno miec co najmniej 3 znaki";
      return;
    }
    this.todoService.addTodo(todo);
    this.todos = this.todoService.todos;
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
    this.todos = this.todoService.todos; 
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
    this.todos = this.todoService.todos; 
    }

}