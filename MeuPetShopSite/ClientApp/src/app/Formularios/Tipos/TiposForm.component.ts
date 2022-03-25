import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../Helpers/must-match.validator';
import { Raca } from '../../Racas/Racas';
import { RacaService } from '../../Racas/Racas.service';
import { Tipo } from '../../Tipos/Tipos';
import { TipoService } from '../../Tipos/Tipos.service';

@Component({ selector: 'app-TiposForm', templateUrl: 'TiposForm.Component.html' })
export class TiposForm implements OnInit {
  @Input() Id: string = "";
  @Input() Editar: boolean = false;
  registerForm: FormGroup;
  Racas: Raca[];
  submitted = false;
  Alteracao: string;

  constructor(private formBuilder: FormBuilder, private tiposervice: TipoService,private racaaservice:RacaService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      Raca: ['', Validators.required],
    }, {
    });
    this.racaaservice.ObterRacas().subscribe(racas => { this.Racas = racas; }, error => console.log(error))
    if (this.Editar == true) {
      this.tiposervice.ObterTipo(this.Id).subscribe(tipo => {
        this.registerForm.get("Nome").setValue(tipo.nome, { emitEvent: false });
        this.Alteracao = tipo.alteracao;
        this.registerForm.get("Raca").setValue(tipo.racaId, { emitEvent: false });
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
      var tipo1 = new Tipo()
      tipo1.id = this.Id,
        tipo1.nome = this.registerForm.controls["Nome"].value,
        tipo1.alteracao = null,
        tipo1.racaId = this.registerForm.controls["Raca"].value,
        this.tiposervice.AlterarTipo(this.Id, JSON.stringify(tipo1)).subscribe(result => { alert('Tipo de Animal Alterado com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))
    }
    else {
      var tipo1 = new Tipo()
      tipo1.id = "00000000-0000-0000-0000-000000000000",
        tipo1.nome = this.registerForm.controls["Nome"].value,
        tipo1.alteracao = null,
        tipo1.racaId = this.registerForm.controls["Raca"].value,
        this.tiposervice.IncluirTipo(tipo1).subscribe(result => { alert('Tipo de Animal Incluido com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))
    }
    this.submitted = true;

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}


