import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from './Enderecos';
@Injectable()
export class EnderecoService {

  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"

  ObterEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.UrlServiceV1 + "Enderecos")
  }
  ObterEndereco(id: String): Observable<Endereco> {
    return this.http.get<Endereco>(this.UrlServiceV1 + "Enderecos/" + id)
  }

  DeletarEndereco(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Enderecos/" + id)
  }

  IncluirEndereco(endereco: Endereco): Observable<Endereco> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Endereco>(this.UrlServiceV1 + "Enderecos", endereco, { headers: headers })
  }

  AlterarEndereco(id: String, endereco: string): Observable<Endereco> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Endereco>(this.UrlServiceV1 + "Enderecos/" + id, endereco, { headers: headers })
  }


}

