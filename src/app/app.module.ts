import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { ButtonComponent } from './components/button/button.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { OrderPipe } from './utils/pipes/order.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutServicesComponent } from './pages/about-services/about-services.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ObservablesComponent } from './pages/rxjs/observables/observables.component';
import { HttpsComponent } from './pages/rxjs/https/https.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SubjectsComponent } from './pages/rxjs/subjects/subjects.component';
import { UserDetailComponent } from './pages/rxjs/user-detail/user-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import {CookieService} from "ngx-cookie-service";
import {BearerInterceptor} from "./utils/interceptors/bearer.interceptor";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProxyCorsComponent } from './pages/proxy-cors/proxy-cors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    DirectivesComponent,
    NavigationComponent,
    CommunicationComponent,
    ButtonComponent,
    DialogComponent,
    ProductCardComponent,
    TwoWayBindingComponent,
    CounterComponent,
    FormulairesComponent,
    PipesComponent,
    RainbowPipe,
    OrderPipe,
    AboutServicesComponent,
    RxjsComponent,
    ObservablesComponent,
    HttpsComponent,
    SubjectsComponent,
    UserDetailComponent,
    AuthComponent,
    LoginComponent,
    NotAuthorizedComponent,
    NotFoundComponent,
    ProxyCorsComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // pour ngModel
    ReactiveFormsModule, // Formulaires Réactifs
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
