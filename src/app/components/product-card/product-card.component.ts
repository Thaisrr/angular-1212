import {Component, Input} from '@angular/core';
import {Product} from "../../utils/models/Product";

@Component({
  selector: 'app-product-card[product]',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

}
