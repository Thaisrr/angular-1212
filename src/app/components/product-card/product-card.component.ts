import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../utils/models/Product";

@Component({
  selector: 'app-product-card[product]',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() reload_event = new EventEmitter<string>();

  handleAction() {
    // Après les actions faites par l'enfant
    this.reload_event.emit(`Valeur envoyée par l'Event Emitter`);
  }

}
