import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {DirectivesComponent} from "./pages/directives/directives.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {TwoWayBindingComponent} from "./pages/two-way-binding/two-way-binding.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {AboutServicesComponent} from "./pages/about-services/about-services.component";
import {RxjsComponent} from "./pages/rxjs/rxjs.component";
import {ObservablesComponent} from "./pages/rxjs/observables/observables.component";
import {HttpsComponent} from "./pages/rxjs/https/https.component";
import {SubjectsComponent} from "./pages/rxjs/subjects/subjects.component";


const routes: Routes = [
  {path: 'presentation', component: PresentationComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'com', component: CommunicationComponent},
  {path: '2way-binding', component: TwoWayBindingComponent},
  {path: 'forms', component: FormulairesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: AboutServicesComponent},
  {path: 'rxjs', component: RxjsComponent, children: [
      {path: '', component: ObservablesComponent},
      {path: 'http', component: HttpsComponent},
      {path: 'subjects', component: SubjectsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
