import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent {

  /************ Template Driven Forms ***************/
  //username: string;
  //password: string;
  user: {username?: string, password?: string } = {
    username : '', // vide ou undefined
    password: '',
  }
  isSubmitted = false;

  submitUser() {
    this.isSubmitted = true;
    console.log(`Sauvegarde de l'utilisateur⋅trice `, this.user);
  }

  get usernameHasError() {
   return  this.isSubmitted && (!this.user.username || this.user.username?.length < 2);
  }


  /************** Reactive Forms ******************/

  /* 1. Form Control ****/
  book_control = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[A-Za-z].*/)
  ]);

  saveBook() {
    console.log('Livre sauvegardé ', this.book_control.value);
    this.book_control.reset();
  }

  /* 2. Formation *****/
  categories_checkboxes = [
    {label: 'Front End', value: 'FRONT'},
    {label: 'Back End', value: 'BACK'},
    {label: 'Web', value: 'WEB'},
    {label: 'Design', value: 'DESIGN'},
    {label: 'Informatique', value: 'INFORMATIQUE'},
  ]

  formation_form = new FormGroup({
    title: new FormControl('Angular', [Validators.required]),
    start: new FormControl('2022-12-12', [Validators.required]),
    duration: new FormControl(5, [Validators.min(1), Validators.max(5)]),
    trainer: new FormGroup({
      firstname: new FormControl('Jean Michel'),
      lastname: new FormControl('La Tourte'),
    }),
    modules: new FormArray([
      new FormControl(),
      new FormControl()
    ]),
    categories: new FormArray<any>([])
  });



  get title() {
    return this.formation_form.controls.title as FormControl;
  }
  get start() {
    return this.formation_form.controls.start as FormControl
  }

  get duration() {
    return this.formation_form.controls.duration as FormControl
  }
  get titleError() {
    if(this.title.invalid && this.title.touched) {
      if(this.title.hasError('required')) {
        return `Veuillez entrer un titre pour votre formation`;
      }
      if(this.title.hasError('minlength')) {
        return `Le nom de la formation est trop court`;
      }
    }
    return null;
  }

  get modules() {
    return this.formation_form.controls.modules as FormArray;
  }

  get categories() {
    return this.formation_form.controls.categories as FormArray;
  }

  addModule() {
    this.modules.push(new FormControl())
  }


  saveFormation() {
    if(this.formation_form.valid) {
      console.log(this.formation_form.value);
    } else {
      console.error('Nope ! C\'est pas bon !')
    }
  }


  toggleCategory(e: Event) {
    const checkbox = e.target as HTMLInputElement;
    if(checkbox.checked)  {
      console.log('coché', checkbox.value)
      this.categories.push(new FormControl(checkbox.value))
    } else {
      console.log('décochée', checkbox.value);
      const index = this.categories.controls
        .findIndex((control) => control.value === checkbox.value);
      this.categories.removeAt(index);
    }
  }




}
