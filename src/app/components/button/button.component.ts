import {Component, Input} from '@angular/core';
import {ButtonInput} from "../../utils/types/Inputs";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  /*template: `
    <button [class]="level">
      <ng-content></ng-content>
    </button>
  `, */
  styleUrls: ['./button.component.css']
  /*styles: [
    `
    button {
      border-color: #FBB0B2 !important;
    }
    `
  ]*/
})
export class ButtonComponent {

  @Input() level? : ButtonInput;



}
