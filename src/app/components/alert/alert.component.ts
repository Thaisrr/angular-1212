import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../utils/services/alert.service";
import {BehaviorSubject} from "rxjs";
import {Alert, AlertLevel} from "../../utils/types/Alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  alerts$?: BehaviorSubject<Alert[]>;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alerts$ = this.alertService.alerts$;
  }
}
