import {Routes} from "@angular/router";
import {ProfileComponent} from "./pages/auth/profile/profile.component";
import {LoggedGuard} from "./utils/guards/logged.guard";
import {UserComponent} from "./pages/auth/user/user.component";

export const user_routes: Routes = [
  {
    path: 'profile',
    // loadComponent: () => import('./pages/auth/profile/profile.component').then(c => c.ProfileComponent),
    component: ProfileComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'user',
    //loadComponent: () => import('./pages/auth/user/user.component').then(c => c.UserComponent)
    component: UserComponent
  }
]
