import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../../Animais/Animais';
import { AnimalService } from '../../Animais/Animais.service';
import { Cliente } from '../../Clientes/Clientes';
import { ClienteService } from '../../Clientes/Clientes.service';
import { Evento } from '../../Eventos/Evento';
import { EventoService } from '../../Eventos/Evento.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../Helpers/must-match.validator';
import { Raca } from '../../Racas/Racas';
import { RacaService } from '../../Racas/Racas.service';
import { Tipo } from '../../Tipos/Tipos';
import { TipoService } from '../../Tipos/Tipos.service';

@Component({ selector: 'app-AnimaisForm', templateUrl: 'AnimaisForm.Component.html' })
export class AnimaisForm implements OnInit {
  @Input() Id: string = "";
  @Input() Editar: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  Pessoas: Cliente[];
  Tipos: Tipo[];
  Racas: Raca[];
  Eventos: Evento[];
  Alteracao: string;



  constructor(private animalservice: AnimalService, private formBuilder: FormBuilder, private clienteservice: ClienteService, private tiposervice: TipoService, private racaservice: RacaService, private eventoservice: EventoService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      Pessoa: ['', Validators.required],
      Genero: ['', Validators.required],
      Tipo: ['', Validators.required],
      Raca: ['', Validators.required],
      Obs: ['', ],
    }, {
    });
    this.clienteservice.ObterClientes().subscribe(clientes => { this.Pessoas = clientes;  }, error => console.log(error))
    this.tiposervice.ObterTipos().subscribe(Tipos => { this.Tipos = Tipos;  }, error => console.log(error))
    this.racaservice.ObterRacas().subscribe(racas => { this.Racas = racas;  }, error => console.log(error))
    if (this.Editar == true) {
      this.animalservice.ObterAnimal(this.Id).subscribe(animal => {
        var Genero = 2;
        if (animal.genero == "Masculino") {
          Genero = 1;
        }
        this.registerForm.get("Nome").setValue(animal.nome, { emitEvent: false });
        this.registerForm.get("Pessoa").setValue(animal.pessoaId, { emitEvent: false });
        this.registerForm.get("Genero").setValue(Genero, { emitEvent: false });
        this.registerForm.get("Tipo").setValue(animal.tipoId, { emitEvent: false });
        this.registerForm.get("Raca").setValue(animal.racaId, { emitEvent: false });                   
        this.registerForm.get("Obs").setValue(animal.obs, { emitEvent: false });
        this.Alteracao = animal.alteracao;
        if (animal.eventos.length > 0) {
          this.Eventos = [];
          var i;
          for (i = 0; i < animal.eventos.length; i++) {
            this.eventoservice.ObterEvento(animal.eventos[i].toString()).subscribe(eventos => {
              this.Eventos.push(eventos);
            }, error => console.log(error))
          }
        }


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
      var animal1 = new Animal()
      animal1.id = this.Id,
        animal1.nome = this.registerForm.controls["Nome"].value,
        animal1.pessoa = null,
        animal1.pessoaId = this.registerForm.controls["Pessoa"].value,
        animal1.genero = this.registerForm.controls["Genero"].value.toString(),
        animal1.tipoId = this.registerForm.controls["Tipo"].value,
        animal1.tipo = null,
        animal1.raca = null,
        animal1.racaId = this.registerForm.controls["Raca"].value,
        animal1.obs = this.registerForm.controls["Obs"].value,
        animal1.alteracao = null,
        animal1.eventos = null,
      this.animalservice.AlterarAnimal(this.Id, JSON.stringify(animal1)).subscribe(result => { alert('Animal Alterado com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))

    }
    else {
      var animal1 = new Animal()
      animal1.id = "00000000-0000-0000-0000-000000000000",
        animal1.nome = this.registerForm.controls["Nome"].value,
        animal1.pessoa = null,
        animal1.pessoaId = this.registerForm.controls["Pessoa"].value,
        animal1.genero = this.registerForm.controls["Genero"].value.toString(),
        animal1.tipoId = this.registerForm.controls["Tipo"].value,
        animal1.tipo = null,
        animal1.raca = null,
        animal1.racaId = this.registerForm.controls["Raca"].value,
        animal1.obs = this.registerForm.controls["Obs"].value,
        animal1.alteracao = null,
        animal1.eventos = null,
        this.animalservice.IncluirAnimal(animal1).subscribe(result => { alert('Animal Incluido com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))
    }
    this.submitted = true;

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}


