import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: string[] = [];
  panier$ = new BehaviorSubject({...this.panier});
  length$ = new BehaviorSubject(this.panier.length);


  constructor() { }

  add(prod: string) {
    this.panier.push(prod);
    this.panier$.next({...this.panier});
    this.length$.next(this.panier.length);
  }
}
