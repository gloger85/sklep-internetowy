import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[]=[];
  addTODO(todo:string): void{
    if (todo.length<=3){
      alert('Zadanie powinno miec co najmiej 4 znaki!');
      return;
    }

    this.todos.push({name: todo, isComplete: false});
    console.log('Aktualna lista todo: ', this.todos);
  }
}
