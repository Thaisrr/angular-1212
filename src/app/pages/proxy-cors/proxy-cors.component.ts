import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-proxy-cors',
  templateUrl: './proxy-cors.component.html',
  styleUrls: ['./proxy-cors.component.css']
})
export class ProxyCorsComponent implements OnInit{

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/api').subscribe(console.log);
    // localhost:4200/api
  }


}
