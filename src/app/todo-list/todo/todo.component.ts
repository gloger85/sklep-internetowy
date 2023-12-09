import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
//implements OnInit
export class TodoComponent implements OnChanges, DoCheck {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  openModal = false;  


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck zostal wykonany');
  }

  changeTodoStatus(){
    this.changeStatus.emit(this.i);
  }

  toggleModal(): void{
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
