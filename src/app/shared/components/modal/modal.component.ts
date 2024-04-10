import { Component,  EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy  {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  
  
  ngOnInit(): void {
    

  }
  ngOnDestroy(): void {
    
  }

  

  onClose(){
    this.close.emit();
  }
}
