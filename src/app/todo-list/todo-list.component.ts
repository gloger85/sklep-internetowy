import { Component, OnChanges, SimpleChanges, Input, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../core/services/todo.service';
import { TestService } from '../core/services/test.service';
import { Subscription } from 'rxjs';
import { TodoApiService } from '../core/services/todo-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges, AfterViewInit, AfterViewChecked, OnInit, OnDestroy {

  @Input() test!: string;
  @ViewChild(TodoComponent) todoComp!: TodoComponent;
  @ViewChildren(TodoComponent) todoComps!: TodoComponent;

  todos: Todo[] = this.todoService.todos;
  errorMessage = "";
  testSwitchCase = "tak";
  sub! : Subscription;

  constructor(private todoService: TodoService, private todoApiService: TodoApiService) {}
 
  ngOnInit(): void {
    this.sub = this.todoService.todoChanged.subscribe({
      next: arrTodos => this.todos = arrTodos
    })
    this.todoApiService.getTodos().subscribe(
      {
        next: todos =>{
          this.todos=todos;
        }
      }
    )
  }

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
      }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
    
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
    
    }

    ngOnDestroy(): void {      
      this.sub.unsubscribe();
    }

}