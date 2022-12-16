import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../utils/services/alert.service";
import {Alert} from "../../utils/types/Alert";

@Component({
  selector: 'app-proxy-cors',
  templateUrl: './proxy-cors.component.html',
  styleUrls: ['./proxy-cors.component.css']
})
export class ProxyCorsComponent implements OnInit{

  constructor(private http: HttpClient, private alertService: AlertService) {
  }

  ngOnInit() {
    this.http.get('/api').subscribe(console.log);
    // localhost:4200/api
  }

  sendAlert(alert: Alert) {
    this.alertService.create(alert);
  }


}
