import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../Helpers/must-match.validator';

@Component({ selector: 'app-EventosForm', templateUrl: 'EventosForm.Component.html' })
export class EventosForm implements OnInit {
  @Input() Id: string = "";
  @Input() Editar: boolean = false;
  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      Assunto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }, {
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

