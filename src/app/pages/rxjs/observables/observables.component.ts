import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy{
  data$ = new Observable<string>(observer => {
    observer.next('Hello World !');
    observer.next('Coucou');
    //observer.error(new Error(`C'est cassé !`));
    observer.next('Holà');
    observer.complete();
    observer.next('Plus rien à voir')
  });

  interval$ = interval(1000); // Créé un observable qui envoie un nombre toutes les 1s

  subscription?: Subscription;

  ngOnInit() { // Agit lorsque le composant est prêt

    // Lance la souscription
    this.data$
      .subscribe({
        next: (value) => console.log('Nouvelle valeur reçue : ', value),
        error: (err) => console.log(`Fin de l'observable, cause : erreur.`, err?.message),
        complete: () => console.log(`Fin de l'observable, cause : complete. Fin de l'abonnement.`)
      });
    // On est abonné à l'observable: dès qu'il envoit une nouvelle valeur, lance la callback


    this.subscription = this.interval$.subscribe({
      next: (count) => console.log('Counter : ', count)
    })

  }

  ngOnDestroy() {
    console.warn('Destruction du composant ');
    this.subscription?.unsubscribe();
  }

}
