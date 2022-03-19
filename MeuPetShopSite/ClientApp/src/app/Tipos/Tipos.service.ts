import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from './Tipos';
@Injectable()
export class TipoService {

  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"

  ObterTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.UrlServiceV1 + "Tipos")
  }

  ObterTipo(id: String): Observable<Tipo> {
    return this.http.get<Tipo>(this.UrlServiceV1 + "Tipos/" + id)
  }

  DeletarTipo(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Tipos/" + id)
  }

  IncluirTipo(tipo: Tipo): Observable<Tipo> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Tipo>(this.UrlServiceV1 + "Tipos", tipo, { headers: headers })
  }

  AlterarTipo(id: String, tipo: string): Observable<Tipo> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Tipo>(this.UrlServiceV1 + "Tipos/" + id, tipo, { headers: headers })
  }


}

