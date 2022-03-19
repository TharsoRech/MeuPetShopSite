import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../Helpers/must-match.validator';
import { Raca } from '../../Racas/Racas';
import { RacaService } from '../../Racas/Racas.service';

@Component({ selector: 'app-RacasForm', templateUrl: 'RacasForm.Component.html' })
export class RacasForm implements OnInit {
  @Input() Id: string = "";
  @Input() Editar: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  Alteracao: string;

  constructor(private formBuilder: FormBuilder, private racaservice: RacaService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nome: ['', Validators.required],
    }, {
    });
    if (this.Editar == true) {
      this.racaservice.ObterRaca(this.Id).subscribe(raca => {
        this.registerForm.get("Nome").setValue(raca.nome, { emitEvent: false });
        this.Alteracao = raca.alteracao;
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
      var raca1 = new Raca()
      raca1.id = this.Id,
        raca1.nome = this.registerForm.controls["Nome"].value,
        raca1.alteracao = null,
        this.racaservice.AlterarRaca(this.Id, JSON.stringify(raca1)).subscribe(result => { alert('Atendente Alterado com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))

    }
    else {
      var raca1 = new Raca()
      raca1.id = "00000000-0000-0000-0000-000000000000",
        raca1.nome = this.registerForm.controls["Nome"].value,
        raca1.alteracao = null,
        this.racaservice.IncluirRaca(raca1).subscribe(result => { alert('Atendente Incluido com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))
    }
    this.submitted = true;

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

