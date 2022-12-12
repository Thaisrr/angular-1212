import { Component } from '@angular/core';
import {Image} from "../../utils/types/Images";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  message = 'Hello World';
  is_logged = true;
  image_url = 'https://wallpaperaccess.com/full/128440.jpg';

  image: Image = {
    url: 'https://wallpaperaccess.com/full/128440.jpg',
    description: 'Un chat cool',
    title: 'Un super titre'
  }

}
