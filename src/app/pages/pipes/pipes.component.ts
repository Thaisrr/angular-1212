import { Component } from '@angular/core';
import {OrderDirection} from "../../utils/types/Parameters";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // TODO : Expliquer la destructuration
  message = 'hEllO WOrlD';
  PI = Math.PI;
  today = new Date();

  fruits = ['Abricot', 'Pommes', 'Litchi', 'Kiwi'];

  direction: OrderDirection = 'default';

}
