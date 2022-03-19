import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Clientes';
@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"

  ObterClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.UrlServiceV1 + "Pessoas")
  }
  ObterCliente(id: String): Observable<Cliente> {
    return this.http.get<Cliente>(this.UrlServiceV1 + "Pessoas/" + id)
  }

  DeletarCliente(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Pessoas/" + id)
  }

  IncluirCliente(cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Cliente>(this.UrlServiceV1 + "Pessoas", cliente, { headers: headers })
  }

  AlterarCliente(id: String, cliente: string): Observable<Cliente> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Cliente>(this.UrlServiceV1 + "Pessoas/" + id, cliente, { headers: headers })
  }

}

