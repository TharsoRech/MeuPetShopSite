import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../../Animais/Animais';
import { AnimalService } from '../../Animais/Animais.service';
import { Cliente } from '../../Clientes/Clientes';
import { ClienteService } from '../../Clientes/Clientes.service';
import { Endereco } from '../../Enderecos/Enderecos';
import { EnderecoService } from '../../Enderecos/Enderecos.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../Helpers/must-match.validator';

@Component({ selector: 'app-ClientesForm', templateUrl: 'ClientesForm.Component.html' })
export class ClientesForm implements OnInit {
  @Input() Id: string = "";
  @Input() Editar: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  Alteracao: string;
  endereco: Endereco;
  animais: Animal[];

  constructor(private formBuilder: FormBuilder, private clienteservice: ClienteService,private enderecoservice: EnderecoService,private animalservice: AnimalService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      DataNascimento: ['', Validators.required],
      Cpf: ['', Validators.required],
    }, {
    });
    if (this.Editar == true) {
      this.clienteservice.ObterCliente(this.Id).subscribe(cliente => {
        this.registerForm.get("Nome").setValue(cliente.nome, { emitEvent: false });
        this.registerForm.get("DataNascimento").setValue(cliente.datadenascimento, { emitEvent: false });
        this.registerForm.get("Cpf").setValue(cliente.cpf, { emitEvent: false });
        if (cliente.endereco != null) {
          this.enderecoservice.ObterEndereco(cliente.endereco).subscribe(enderecos => { this.endereco = enderecos; }, error => console.log(error))
        }
        if (cliente.animais != null && cliente.animais.length > 0) {
          this.animais = [];
          var i;
          for (i = 0; i < cliente.animais.length; i++) {
            this.animalservice.ObterAnimal(cliente.animais[i]).subscribe(eventos => {
              this.animais.push(eventos);
            }, error => console.log(error))
          }
        }
        this.Alteracao = cliente.alteracao;
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
      var cliente1 = new Cliente()
      cliente1.id = this.Id,
        cliente1.nome = this.registerForm.controls["Nome"].value,
        cliente1.alteracao = null,
        this.clienteservice.AlterarCliente(this.Id, JSON.stringify(cliente1)).subscribe(result => { alert('Cliente Alterado com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))

    }
    else {
      var cliente1 = new Cliente()
      cliente1.id = "00000000-0000-0000-0000-000000000000",
        cliente1.nome = this.registerForm.controls["Nome"].value,
        cliente1.alteracao = null,
        this.clienteservice.IncluirCliente(cliente1).subscribe(result => { alert('Cliente Incluido com sucesso'); }, error => alert(JSON.stringify(error, null, 10)))
    }
    this.submitted = true;

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}


