import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter[value]',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();


  increment() {
    // Un enfant ne devrait jamais modifier sa props
   // this.value++;
    this.valueChange.emit(this.value + 1);
  }

  decrement() {
    this.valueChange.emit(this.value - 1);
  }

}
