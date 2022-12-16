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
import {NotAuthorizedComponent} from "./pages/not-authorized/not-authorized.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ProxyCorsComponent} from "./pages/proxy-cors/proxy-cors.component";




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
      {path: 'user', loadChildren: () => import('./user-routes').then(r => r.user_routes)}
    ]},
  {path: '401', component: NotAuthorizedComponent},
  {path: 'accueil', redirectTo: '/presentation'},
  {path: 'acceuil', redirectTo: '/presentation'},
  {path: '', redirectTo: '/presentation', pathMatch: "full"},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'cors', component: ProxyCorsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
