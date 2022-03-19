import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../Animais/Animais';
import { Cliente } from '../Clientes/Clientes';
import { Evento } from '../Eventos/Evento';
import { Atendente } from '../Atendentes/Atendentes';
import { Endereco } from '../Enderecos/Enderecos';
import { Tipo } from '../Tipos/Tipos';
import { Raca } from '../Racas/Racas';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-EditarModal',
  templateUrl: './EditarModal.component.html'
})
export class EditarModalComponent implements OnInit {
  @Input() SelectEdit: string;
  @Input() Id: string = "";
  public animais: Animal;
  public clientes: Cliente;
  public eventos: Evento;
  public atendentes: Atendente;
  public enderecos: Endereco;
  public tipos: Tipo;
  public racas: Raca;

  ngOnInit() {
    if (this.SelectEdit.indexOf("Animais") > -1) {
      this.animais = new Animal();
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (this.SelectEdit.indexOf("Atendentes") > -1) {
      this.atendentes = new Atendente();
      this.clientes = null;
      this.eventos = null;
      this.animais = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (this.SelectEdit.indexOf("Clientes") > -1) {
      this.clientes = new Cliente();
      this.animais = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (this.SelectEdit.indexOf("Eventos") > -1) {
      this.eventos = new Evento();
      this.clientes = null;
      this.animais = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (this.SelectEdit.indexOf("Enderecos") > -1) {
      this.enderecos = new Endereco();
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.animais = null;
      this.tipos = null;
      this.racas = null;
    }
    if (this.SelectEdit.indexOf("Tipos") > -1) {
      this.tipos = new Tipo();
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.animais = null;
      this.racas = null;
    }
    if (this.SelectEdit.indexOf("Racas") > -1) {
      this.racas = new Raca();
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.animais = null;
    }
  }
}
