import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {UserService} from "../../../utils/services/user.service";
import {User} from "../../../utils/models/User";

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit{
  users?: User[];
  username: string = '';

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log('Erreur : ', err?.message),
      complete: () => console.log('Données récupérées')
    });

    this.userService.getAll().subscribe({
      next: (users) => this.users = users
    });

  }

  save() {
    const user: User = {
      name: this.username,
      email: this.username.split(' ').join('') + '@mail.fr'
    }
    this.userService.create(user).subscribe({
      next: (res) => {
        this.username = '';
        console.log(res);
      },
    })
  }

}
