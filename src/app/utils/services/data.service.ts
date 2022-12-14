import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datas = [
    {name: "data 1"},
    {name: "data 2"},
    {name: "data 3"},
  ]

  constructor() {
    console.log('Hello from dataservice constructor')
  }

  add(new_data: {name: string}) {
    if(new_data.name) {
      this.datas.push(new_data);
    }
  }

  remove(old_data: {name:string} ) {
    const index = this.datas.findIndex(el => el.name === old_data.name);
    this.datas.splice(index, 1);
  }

  deleteAll() {
    this.datas = [];
  }

}
