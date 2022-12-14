import { Component } from '@angular/core';
import {OrderDirection} from "../../utils/types/Parameters";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // TODO : Expliquer la destructuration
  // UX / UI : ressources
  message = 'hEllO WOrlD';
  PI = Math.PI;
  today = new Date();

  fruits = ['Abricot', 'Pommes', 'Litchi', 'Kiwi'];

  direction: OrderDirection = 'default';

  name = 'Jean Micheline';
  fruit = '';

  /*
  a = ['a', 'b', 'c']
   */
  count = 0;

  getMessage() {
    // On joue cette méthode à chaque modification du composant
    console.log('in get message');
    //this.count++;
    return this.message.toUpperCase();
  }

  addFruit() {
    this.fruits = [...this.fruits, this.fruit];
  }

}
