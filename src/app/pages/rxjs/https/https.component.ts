import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log('Erreur : ', err?.message),
      complete: () => console.log('Données récupérées')
    })
  }

}
