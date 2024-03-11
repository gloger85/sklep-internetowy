import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { timeout } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
//implements OnInit
export class TodoComponent implements OnChanges, DoCheck, AfterViewInit, OnDestroy, OnInit {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  @ViewChild('li') li!: ElementRef;
  openModal = false;  
  timeout!: number;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
    console.log('ngOnDestroy: object has been removed');
  }

  ngOnInit(): void {
    this.timeout = setTimeout(() => {
      console.log('setTimeout')
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInity has been started. ' + this.li);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck has been started');
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

