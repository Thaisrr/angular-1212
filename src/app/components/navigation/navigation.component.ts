import {Component, OnInit} from '@angular/core';
import {PanierService} from "../../utils/services/panier.service";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthenticationService} from "../../utils/services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  panier$?: Observable<number>;
  show_animation = false;
  is_logged$?: BehaviorSubject<boolean>;
  constructor(private panierService: PanierService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.panierService.length$.subscribe(() => {
      this.show_animation = true;
      setTimeout(() => this.show_animation = false, 1500)
    });

    this.panier$ = this.panierService.length$;

    this.is_logged$ = this.authService.is_logged$;
  }

  logout() {
    this.authService.logout();
  }


}
