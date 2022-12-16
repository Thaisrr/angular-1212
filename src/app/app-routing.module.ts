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
import {UserDetailComponent} from "./pages/rxjs/user-detail/user-detail.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {ProfileComponent} from "./pages/auth/profile/profile.component";
import {LoggedGuard} from "./utils/guards/logged.guard";
import {NotAuthorizedComponent} from "./pages/not-authorized/not-authorized.component";


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
      {path: 'details/:id', component: UserDetailComponent},
    ]},
  {path: 'auth', component: AuthComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard]}
    ]},
  {path: '401', component: NotAuthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
