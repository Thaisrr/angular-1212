import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLogin} from "../types/UserLogin";
import {CookieService} from "ngx-cookie-service";
import {BehaviorSubject, catchError, of, tap} from "rxjs";
import {AlertService} from "./alert.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api_url = 'https://reqres.in/api/login';

  is_logged$: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private alertService: AlertService,
    private router: Router) {
    this.is_logged$ =  new BehaviorSubject(this.isLogged());
    // On vérifie au démarrage du service si on est connecté
  }

  login(user: UserLogin) {
    return this.http.post<{token: string}>(this.api_url, user).pipe(
      tap(res => this.setToken(res.token)), // récupérer la donnée
      tap(() => this.alertService.create({text: 'Bienvenue Jean Michel', level: 'success', duration: 5000})),
      tap(() => this.router.navigate(['/auth/user/profile'])),
      catchError(err => {
        this.alertService.create({text: err.error.message || 'Impossible de vous connecter', level: 'error', duration: 5000});
        return of(false);
      })
    )
  }

  setToken(token: string) {
    this.cookieService.set('token', token);
    this.is_logged$.next(true);
  }

  isLogged(): boolean {
    console.log(this.cookieService.get('token'));
    console.log(this.cookieService.getAll());
    return !!this.cookieService.get('token')
    //return !!localStorage.getItem('token');
    // Return true si il y a un token dans le localStorage
  }

  logout() {
    this.cookieService.delete('token');
    localStorage.removeItem('token');
    this.is_logged$.next(false);
  }

  getToken() {
    return this.cookieService.get('token');
  }

}
