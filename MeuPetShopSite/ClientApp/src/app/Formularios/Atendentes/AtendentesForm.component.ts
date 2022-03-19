import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atendente } from '../../Atendentes/Atendentes';
import { AtendenteService } from '../../Atendentes/Atendentes.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../Helpers/must-match.validator';

@Component({ selector: 'app-AtendentesForm', templateUrl: 'AtendentesForm.Component.html' })
export class AtendentesForm implements OnInit {
  @Input() Id: string = "";
  @Input() Editar: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  Alteracao: string;

  constructor(private formBuilder: FormBuilder, private atendenteservice: AtendenteService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nome: ['', Validators.required],
    }, {
    });
    if (this.Editar == true) {
      this.atendenteservice.ObterAtendente(this.Id).subscribe(atendente => {
        this.registerForm.get("Nome").setValue(atendente.nome, { emitEvent: false });
        this.Alteracao = atendente.alteracao;
      }, error => console.log(error))
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.Editar == true) {
      var atendente1 = new Atendente()
      atendente1.id = this.Id,
        atendente1.nome = this.registerForm.controls["Nome"].value,
        atendente1.alteracao = null,
        this.atendenteservice.AlterarAtendente(this.Id, JSON.stringify(atendente1)).subscribe(result => { alert('Atendente Alterado com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))

    }
    else {
      var atendente1 = new Atendente()
      atendente1.id = "00000000-0000-0000-0000-000000000000",
        atendente1.nome = this.registerForm.controls["Nome"].value,
        atendente1.alteracao = null,
        this.atendenteservice.IncluirAtendente(atendente1).subscribe(result => { alert('Atendente Incluido com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))
    }
    this.submitted = true;

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

