import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  count = 0;
  count2 = 100;

  name = 'Jean Michel';
  name2= 'Jean Micheline';

  name3 = 'Toto';

  increment() {this.count++};
  update(new_value: number) {
    this.count = new_value;
  }

  updateName(e: Event) {
    const input = e.target as HTMLInputElement;
    this.name = input.value;
  }

  updateName2(e: string) {
    this.name2 = e;
  }

}
