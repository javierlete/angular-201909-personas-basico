import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [
    { id: 1, nombre: 'Javier Lete', email: 'javierlete@email.com' },
    { id: 2, nombre: 'Pepe Pérez', email: 'pepeperez@email.com' }
  ];

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return of(this.personas);
  }

  addPersona(persona: Persona): Observable<Persona> {
    persona.id = Math.max(...this.personas.map(p => p.id)) + 1;
    this.personas.push(persona);
    return of(persona);
  }
}
