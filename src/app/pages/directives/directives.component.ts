import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    is_logged = false;
    ma_class = 'blue';
    mes_classes = ['truc', 'bidule', 'machin']
    ngClassObj = '[ngClass]="{maclasse: condition}"';
    color = 'rebeccapurple';
    size = 12;
    style = {
      color: this.color,
      fontSize: this.size + 'px',
      'text-decoration': 'underline 1px orange'
    }
    fruits = ['Pommes', 'Clémentines', 'Oranges'];

    login() {
      this.is_logged = !this.is_logged;
    }

    zoom() {
      this.size++;
    }

    dezoom() {
      this.size--;
    }
}
