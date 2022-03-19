import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-DashBoard',
  templateUrl: './DashBoard.component.html',
  styleUrls: ['./DashBoard.component.css']
})
export class DashBoardComponent implements OnInit {
  public Geral: boolean = true;
  public Cadastros: boolean = false;
  public Eventos: boolean = false;
  public Configuracoes: boolean = false;
  public Suporte: boolean = false;
  public CurrentRoot: string = "Geral";
  public Expanded: boolean = true;
  ngOnInit(): void {
     
  }
  ExpandDash() {
    if (this.Expanded) {
      document.getElementById("sidebar").style.width = "7%";
      this.Expanded = false;
    }
    else {
      document.getElementById("sidebar").style.width = "20%";
      this.Expanded = true;
    }
  }
  MudarRotaDash(rootpath: string) {
    this.CurrentRoot = rootpath;
    if (this.CurrentRoot.indexOf("Geral") > -1) {
      this.Geral = true;
      this.Cadastros = false;
      this.Eventos = false;
      this.Configuracoes = false;
      this.Suporte = false;
    }
    if (this.CurrentRoot.indexOf("Cadastros") > -1) {
      this.Geral = false;
      this.Cadastros = true;
      this.Eventos = false;
      this.Configuracoes = false;
      this.Suporte = false;
    }
    if (this.CurrentRoot.indexOf("Eventos") > -1) {
      this.Geral = false;
      this.Cadastros = false;
      this.Eventos = true;
      this.Configuracoes = false;
      this.Suporte = false;
    }
    if (this.CurrentRoot.indexOf("Configurações") > -1) {
      this.Geral = false;
      this.Cadastros = false;
      this.Eventos = false;
      this.Configuracoes = true;
      this.Suporte = false;
    }
    if (this.CurrentRoot.indexOf("Suporte") > -1) {
      this.Geral = false;
      this.Cadastros = false;
      this.Eventos = false;
      this.Configuracoes = false;
      this.Suporte = true;
    }
  }
}

