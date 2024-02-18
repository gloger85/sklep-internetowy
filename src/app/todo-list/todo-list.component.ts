import { Component, OnChanges, SimpleChanges, Input, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges, AfterViewInit, AfterViewChecked {

  @Input() test!: string;
  @ViewChild(TodoComponent) todoComp!: TodoComponent;
  @ViewChildren(TodoComponent) todoComps!: TodoComponent;

  todos: Todo[]=[];
  errorMessage = "";
  testSwitchCase = "tak";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit(): void {
    console.log ('ngAfterViewInit was triggered ' + this.todoComp);
  }

  ngAfterViewChecked(): void {
    console.log ('ngAfterViewChecked was triggered ' + this.todoComp);
  }

  addTodo(todo:string): void{
    if (todo.length<=3){
      this.errorMessage='Zadanie powinno miec co najmiej 4 znaki!';
      return;
    }

    this.todos.push({name: todo, isComplete: false});
    console.log('Aktualna lista todo: ', this.todos);
  }

  clearErrorMessage (){
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo: Todo, index: number) => index !== i)
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
      }
    }

}