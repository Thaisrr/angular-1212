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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormulairesComponent } from './pages/formulaires/formulaires.component';

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
    FormulairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // pour ngModel
    ReactiveFormsModule, // Formulaires Réactifs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
