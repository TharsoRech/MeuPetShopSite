import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raca } from './Racas';
@Injectable()
export class RacaService {

  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"

  ObterRacas(): Observable<Raca[]> {
    return this.http.get<Raca[]>(this.UrlServiceV1 + "Racas")
  }

  ObterRaca(id: String): Observable<Raca> {
    return this.http.get<Raca>(this.UrlServiceV1 + "Racas/" + id)
  }

  DeletarRaca(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Racas/" + id)
  }

  IncluirRaca(raca: Raca): Observable<Raca> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Raca>(this.UrlServiceV1 + "Racas", raca, { headers: headers })
  }

  AlterarRaca(id: String, raca: string): Observable<Raca> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Raca>(this.UrlServiceV1 + "Racas/" + id, raca, { headers: headers })
  }


}

