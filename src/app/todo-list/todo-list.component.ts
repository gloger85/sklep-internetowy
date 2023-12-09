import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {

  @Input() test!: string;
  todos: Todo[]=[];
  errorMessage = "";
  testSwitchCase = "tak";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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