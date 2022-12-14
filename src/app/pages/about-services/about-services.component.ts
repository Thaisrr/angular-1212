import {Component, OnInit} from '@angular/core';
import {DataService} from "../../utils/services/data.service";

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.css'],
})
export class AboutServicesComponent implements OnInit{
  datas?: {name: string}[];
  data_name: string = '';

  constructor(private dataService : DataService) {
    console.log('In about service Component Constructor')
  }

  ngOnInit() {
    // Hook -> fonction qui s'éxécute à un moment donné
    // ngOnInit -> s'éxécute à l'initialisation du composant
    // Ici qu'on passer des données, faire des requêtes, appeler un service...
    this.datas = this.dataService.datas;
  }

  deleteOne(d: {name: string}) {
    this.dataService.remove(d);
  }

  saveData() {
    this.dataService.add({name: this.data_name});
    this.data_name = '';
  }

}
