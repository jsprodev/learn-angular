import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  reactiveForm  = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  ngOnInit() {
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  onChange() {
    console.log(this.email);
  }
}
