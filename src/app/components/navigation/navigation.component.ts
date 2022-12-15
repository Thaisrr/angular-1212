import {Component, OnInit} from '@angular/core';
import {PanierService} from "../../utils/services/panier.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  panier$?: Observable<number>;
  show_animation = false;
  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.panierService.length$.subscribe(() => {
      this.show_animation = true;
      setTimeout(() => this.show_animation = false, 1500)
    });

    this.panier$ = this.panierService.length$;


  }


}
