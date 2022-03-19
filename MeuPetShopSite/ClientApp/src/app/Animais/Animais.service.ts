import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './Animais';
@Injectable()
export class AnimalService {

  constructor(private http: HttpClient) {

  }

  protected UrlServiceV1: string = "https://localhost:44316/api/v1/"


  ObterAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.UrlServiceV1 + "Animais")
  }

  ObterAnimal(id :String): Observable<Animal>
  {
    return this.http.get<Animal>(this.UrlServiceV1 + "Animais/" + id)
  }

  DeletarAnimail(id: String): Observable<string> {
    return this.http.delete<string>(this.UrlServiceV1 + "Animais/" + id)
  }

  IncluirAnimal(animal: Animal): Observable<Animal> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post<Animal>(this.UrlServiceV1 + "Animais", animal, { headers: headers })
  }

  AlterarAnimal(id: String, animal: string): Observable<Animal> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<Animal>(this.UrlServiceV1 + "Animais/" + id, animal, { headers: headers })
  }




}

