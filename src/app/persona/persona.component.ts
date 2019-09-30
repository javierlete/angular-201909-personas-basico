import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = {
    id: 10, nombre: 'Javier Lete', email: 'javierlete@email.com'
  };

  constructor(private personaService: PersonaService, private location: Location) { }

  ngOnInit() {
  }

  onAceptar() {
    this.personaService.addPersona(this.persona).subscribe(
      _ => this.location.back()
    );
  }

}
