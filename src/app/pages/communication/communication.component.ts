import {Component, OnInit} from '@angular/core';
import {ButtonInput} from "../../utils/types/Inputs";
import {Product} from "../../utils/models/Product";
import {DataService} from "../../utils/services/data.service";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit{
  content = "<ng-content></ng-content>"
  btn_level: ButtonInput = 'success';

  one_product : Product = {id: 120, name: 'Bière', price: 6};


  products: Product[] = [ // Récupéré via une API
    {id: 1, name: 'Patate Bindj', price: 4},
    {id: 2, name: 'Carottes de Tilque', price: 5},
    {id: 3, name: 'Maroille', price: 8}
  ];

  datas?: {name: string}[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.datas = this.dataService.datas;
  }

  handleClick(e: Event) {
    console.log('Clicked !', e);
  }

  reload(message : string) {
    console.log('Rechargement des données...');
    console.log(message);
  }

}
