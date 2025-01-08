import { Component, OnInit } from '@angular/core';
import { TodoService } from '../core/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit{

  todo: Todo | undefined;
  id!: number;

constructor(
  private todoService: TodoService,
  private router: Router,
  private route: ActivatedRoute
) {}
  ngOnInit(): void {
    
  }

  navigateNextTodo() {
    this.router.navigate(['/todo', this.id+1])
    }

}
