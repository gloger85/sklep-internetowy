import { Component, OnInit } from '@angular/core';
import { TodoService } from '../core/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/interfaces/todo.interface';
import { Location } from '@angular/common';

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
  private route: ActivatedRoute,
  private location: Location
) {}
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      console.log(params)
      this.id = Number(params.get('id'));
      this.todo = this.todoService.getTodo(this.id);
    })

    /* console.log(
      this.location.getState() 
    )*/
  
   /* this.route.queryParams.subscribe((queryParams) =>{
    console.log(queryParams)
    })  */
  } 

  navigateNextTodo() {
    this.router.navigate(['/todo', this.id+1])
    }

    navigateBack() {
      this.location.back()
      }

}
