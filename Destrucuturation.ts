import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import axios from "axios";

function getData() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.4){
        resolve('Des données');
      } else {
        reject('Et non !');
      }
    }, 2000)
  })
}


let message: string;
getData()
  .then((res) => {
    console.log('--- réponse reçue');
    message = res;
    console.log('message: ', message);
  })
  .catch((err) => console.log(err))

async function load() {
  try {
    message = await getData();
    console.log(message);
    // utiliser message
  } catch (e) {
    console.log(e);
  }
}
load();


/*
fetch('https://jsonplaceholder.com/users', {
  method: 'POST',
  headers: {},
  body: {}
}).then(res => res.json())
  .then(json => console.log(json))
*/

axios.get('https://jsonplaceholder.com/users')
  .then(({data}) => console.log(data))



