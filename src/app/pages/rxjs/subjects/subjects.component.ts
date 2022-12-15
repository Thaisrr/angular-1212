import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, ReplaySubject, Subject, Subscription} from "rxjs";
import {PanierService} from "../../../utils/services/panier.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit, OnDestroy{

  souscriptions: Subscription[] = [];

  products = [
    'Produit 1', 'Furby', 'Pokemon', 'Ordinateur'
  ]

  constructor(private panierService: PanierService) {
  }

  ngOnInit() {
    this.createObservable();
    this.createSubject();
    this.createBehaviousSubject();
    this.createReplaySubject();
  }

  createObservable() {
   /* const obs1$ = new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    }); */
    const obs2$ = of(9, 8, 7, 6);

    // Ailleurs
    const sub = obs2$.subscribe(value => console.log('observable 1 , value : ', value));
    this.souscriptions.push(sub);
  }


  createSubject() {
    const subject$ = new Subject<string>();
    // Inutile -> jamais lu
    subject$.next('Coucou');

    const sub1 = subject$.subscribe(res => console.log('[1] subject : ', res));
    subject$.next('Hello');

    // Ailleurs
    const sub2 = subject$.subscribe(res => console.log('[2] subject : ', res));

    // Valeurs surveillées
    subject$.next('Holà');
    subject$.next('Plouf');

    this.souscriptions.push(sub1, sub2);
  }


  createBehaviousSubject() {
    const bs$ = new BehaviorSubject<string>('Valeur default');
    bs$.next('Valeur 1');

    // ailleurs
    bs$.subscribe(res => console.log('[Behaviour Subject] value : ', res));

    bs$.next('Valeur 2');
    bs$.next('Valeur 3');
    bs$.complete();
  }

  createReplaySubject() {
    const replay$ = new ReplaySubject<string>();
    replay$.next('Valeur 1');
    replay$.next('Valeur 2');
    replay$.next('Valeur 3');

    replay$.subscribe(res => console.log('[Replay]  ', res));
    replay$.next('Valeur 4');
    replay$.next('Valeur 5');
    replay$.next('Valeur 6');
    replay$.complete();
  }

  addToPanier(prod: string) {
    this.panierService.add(prod);
  }

  ngOnDestroy() {
    this.souscriptions.forEach(sub => sub.unsubscribe());
  }


}
