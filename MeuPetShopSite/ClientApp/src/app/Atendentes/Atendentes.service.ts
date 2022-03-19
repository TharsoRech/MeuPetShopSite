import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendente } from './Atendentes';
@Injectable()
export class AtendenteService {

  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"

  ObterAtendentes(): Observable<Atendente[]> {
    return this.http.get<Atendente[]>(this.UrlServiceV1 + "Atendentes")
  }
  ObterAtendente(id: String): Observable<Atendente> {
    return this.http.get<Atendente>(this.UrlServiceV1 + "Atendentes/" + id)
  }

  DeletarAtendente(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Atendentes/" + id)
  }

  IncluirAtendente(atendente: Atendente): Observable<Atendente> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Atendente>(this.UrlServiceV1 + "Atendentes", atendente, { headers: headers })
  }

  AlterarAtendente(id: String, atendente: string): Observable<Atendente> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Atendente>(this.UrlServiceV1 + "Atendentes/" + id, atendente, { headers: headers })
  }

}

