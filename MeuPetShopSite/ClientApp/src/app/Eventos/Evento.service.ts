import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './Evento';
@Injectable()
export class EventoService {

  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"

  ObterEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.UrlServiceV1 + "Eventos")
  }

  ObterEvento(id: String): Observable<Evento> {
    return this.http.get<Evento>(this.UrlServiceV1 + "Eventos/" + id)
  }

  DeletarEvento(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Eventos/" + id)
  }

  IncluirEvento(evento: Evento): Observable<Evento> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Evento>(this.UrlServiceV1 + "Eventos", evento, { headers: headers })
  }

  AlterarEvento(id: String, evento: string): Observable<Evento> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Evento>(this.UrlServiceV1 + "Eventos/" + id, evento, { headers: headers })
  }


}

