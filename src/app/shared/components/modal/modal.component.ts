import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterContentInit, AfterContentChecked {

  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @ContentChild('modalDiv') modalDiv!: ElementRef;
  @ContentChild('check ') checkbox!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit test: ' + this.modalDiv);
  }

  ngAfterContentChecked(): void {
    console.log(this.checkbox.nativeElement.checked);
  }

  onClose(){
    this.close.emit();
  }
}
