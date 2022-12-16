import {Component, OnInit} from '@angular/core';
import {User} from "../../../utils/models/User";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {UserService} from "../../../utils/services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  user$?: Observable<User>;
  users$?: Observable<User[]>;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    console.log(route)
  }

  ngOnInit() {
    // Liens pour les users
    this.users$ = this.userService.getAll();


    // Snapshot : une image de la route au moment où le snapshot se fait, donc ici, à l'initialisation du composant
    //const id = this.route.snapshot.params['id'];
    //this.userService.getOneById(id).subscribe(u => this.user = u);

    // Lorsque le paramètre change, Angular ne recharge pas le composant.
    // Il faut surveiller les paramètres
    this.route.params.subscribe(params =>  {
      const id = params['id'];
      this.user$ = this.userService.getOneById(id);
    })

  }




}
