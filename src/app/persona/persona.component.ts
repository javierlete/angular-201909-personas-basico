import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = {
    id: 10, nombre: 'Javier Lete', email: 'javierlete@email.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
