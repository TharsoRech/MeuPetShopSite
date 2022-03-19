import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalService } from '../Animais/Animais.service';
import { ClienteService } from '../Clientes/Clientes.service';
import { Animal } from '../Animais/Animais';
import { error } from 'protractor';
import { Cliente } from '../Clientes/Clientes';
import { Evento } from '../Eventos/Evento';
import { EventoService } from '../Eventos/Evento.service';
import { Atendente } from '../Atendentes/Atendentes';
import { AtendenteService } from '../Atendentes/Atendentes.service';
import { EnderecoService } from '../Enderecos/Enderecos.service';
import { Endereco } from '../Enderecos/Enderecos';
import { Tipo } from '../Tipos/Tipos';
import { TipoService } from '../Tipos/Tipos.service';
import { Raca } from '../Racas/Racas';
import { RacaService } from '../Racas/Racas.service';

@Component({
  selector: 'app-Cadastros',
  templateUrl: './Cadastros.component.html'
})
export class CadastrosComponent implements OnInit {
  constructor(private animalservice: AnimalService, private clienteservice: ClienteService, private eventoservice: EventoService, private atendenteservice: AtendenteService, private enderecoservice: EnderecoService, private tiposervice: TipoService, private racaservice: RacaService) { }
  public display:string = "none";
  public IsSelected: boolean = false;
  public CadastroNome: string = "";
  public Titulo: string = "";
  public animais: Animal[];
  public clientes: Cliente[];
  public eventos: Evento[];
  public atendentes: Atendente[];
  public enderecos: Endereco[];
  public tipos: Tipo[];
  public racas: Raca[];
  public Editar: boolean = false;
  public Adicionar: boolean = false;
  public SeletcId: string = "";

  ngOnInit() {
  
  }
  AddModal() {
    this.display = "block";
      this.Editar = false;
      this.Adicionar = true;
      this.Titulo = "Adicionar " + this.CadastroNome;
  }
  EditModal(Id: string) {
    this.display = "block";
      this.Editar = true;
      this.Adicionar = false;
      this.Titulo = "Editar " + this.CadastroNome;
    this.SeletcId = Id;
  }
  onCloseHandled() {
    this.display = "none";
    this.Editar = false;
    this.Adicionar = false;
    this.Titulo = "";
    this.Atualizar()
  }

  ExcluirRegistro(Id: string) {
    if (confirm("Você tem certeza que deseja deletar? ")) {
    if (this.CadastroNome == null || this.CadastroNome == "") {
      return;
    }
      if (this.CadastroNome.indexOf("Animais") > -1) {
        this.animalservice.DeletarAnimail(Id).subscribe(animais => {
          alert("Animal Removido com Sucesso");
          this.animais = null;
          this.animalservice.ObterAnimais().subscribe(animais => { this.animais = animais; }, error => console.log(error))
        }, error => alert(error))
      }
      if (this.CadastroNome.indexOf("Atendentes") > -1) {
        this.atendenteservice.DeletarAtendente(Id).subscribe(atendente => {
        alert("Atendente Removido com Sucesso");
        this.atendentes = null;
          this.atendenteservice.ObterAtendentes().subscribe(atendentes => { this.atendentes = atendentes; }, error => console.log(error))
        }, error => alert(error))
      }
      if (this.CadastroNome.indexOf("Clientes") > -1) {
        this.clienteservice.DeletarCliente(Id).subscribe(cliente => {
        alert("Cliente Removido com Sucesso");
        this.clientes = null;
          this.clienteservice.ObterClientes().subscribe(clientes => { this.clientes = clientes; }, error => console.log(error))
        }, error => alert(error))
      }
      if (this.CadastroNome.indexOf("Eventos") > -1) {
        this.eventoservice.DeletarEvento(Id).subscribe(evento => {
        alert("Evento Removido com Sucesso");
        this.eventos = null;
          this.eventoservice.ObterEventos().subscribe(eventos => { this.eventos = eventos; }, error => console.log(error))
        }, error => alert(error))
      }
      if (this.CadastroNome.indexOf("Enderecos") > -1) {
        this.enderecoservice.DeletarEndereco(Id).subscribe(evento => {
        alert("Endereço Removido com Sucesso");
        this.enderecos = null;
          this.enderecoservice.ObterEnderecos().subscribe(enderecos => { this.enderecos = enderecos; }, error => console.log(error))
        }, error => alert(error))
      }
      if (this.CadastroNome.indexOf("Tipos") > -1) {
        this.tiposervice.DeletarTipo(Id).subscribe(evento => {
        alert("Tipo de animal Removido com Sucesso");
        this.tipos = null;
          this.tiposervice.ObterTipos().subscribe(tipos => { this.tipos = tipos; }, error => console.log(error))
        }, error => alert(error))
      }
      if (this.CadastroNome.indexOf("Racas") > -1) {
        this.racaservice.DeletarRaca(Id).subscribe(evento => {
        alert("Raça Removida com Sucesso");
        this.racas = null;
          this.racaservice.ObterRacas().subscribe(racas => { this.racas = racas; }, error => console.log(error))
        }, error => alert(error))
      }
   }
  }
  Atualizar() {
    this.animais = null;
    this.clientes = null;
    this.eventos = null;
    this.atendentes = null;
    this.enderecos = null;
    this.tipos = null;
    this.racas = null;
    this.SelecionarCadastro(this.CadastroNome);
  }
  SelecionarCadastro(selectvalue: string) {
    if (selectvalue == "Selecione o tipo de Cadastro") {
      this.IsSelected = false;
      this.animais = null;
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
      return;
    }
    this.IsSelected = true;
    this.CadastroNome = selectvalue;
    if (selectvalue.indexOf("Animais")  > -1) {
      this.animalservice.ObterAnimais().subscribe(animais => { this.animais = animais;  }, error => console.log(error))
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (selectvalue.indexOf("Atendentes") > -1) {
      this.atendenteservice.ObterAtendentes().subscribe(atendentes => { this.atendentes = atendentes;  }, error => console.log(error))
      this.clientes = null;
      this.eventos = null;
      this.animais = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (selectvalue.indexOf("Clientes") > -1) {
      this.clienteservice.ObterClientes().subscribe(clientes => { this.clientes = clientes;  }, error => console.log(error))
      this.animais = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (selectvalue.indexOf("Eventos") > -1) {
      this.eventoservice.ObterEventos().subscribe(eventos => { this.eventos = eventos;  }, error => console.log(error))
      this.clientes = null;
      this.animais = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.racas = null;
    }
    if (selectvalue.indexOf("Enderecos") > -1) {
       this.enderecoservice.ObterEnderecos().subscribe(enderecos => { this.enderecos = enderecos;  }, error => console.log(error))
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.animais = null;
      this.tipos = null;
      this.racas = null;
    }
    if (selectvalue.indexOf("Tipos") > -1) {
          this.tiposervice.ObterTipos().subscribe(Tipos => { this.tipos = Tipos;  }, error => console.log(error))
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.animais = null;
      this.racas = null;
    }
    if (selectvalue.indexOf("Racas") > -1) {
          this.racaservice.ObterRacas().subscribe(racas => { this.racas = racas;  }, error => console.log(error))
      this.clientes = null;
      this.eventos = null;
      this.atendentes = null;
      this.enderecos = null;
      this.tipos = null;
      this.animais = null;
    }

  }
}

