import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:3000/personas/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + id);
  }

  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona);
  }

  modificarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url + persona.id, persona);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete<Persona>(this.url + id);
  }
}
