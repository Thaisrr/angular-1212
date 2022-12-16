import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Alert} from "../types/Alert";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts: Alert[] = [];
  alerts$ = new BehaviorSubject<Alert[]>(this.alerts);


  constructor() { }

  create({text, level = 'warning', duration = 3000}: Alert ) {
    const alert = {text, level, duration};
    this.alerts.push(alert);
    this.alerts$.next(this.alerts);
    setTimeout(() => this.remove(alert), duration)
  }

  remove(alert: Alert) {
    const index = this.alerts.findIndex((a) => a === alert)
    this.alerts.splice(index, 1);
    this.alerts$.next(this.alerts);
  }

}
