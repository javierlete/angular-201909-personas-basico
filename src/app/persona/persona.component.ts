import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = {
    id: 0, nombre: '', email: ''
  };

  constructor(
    private personaService: PersonaService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 0) {
      this.personaService.getPersona(id).subscribe(
        personaRecibida => this.persona = personaRecibida
      );
    }
  }

  onAceptar() {
    this.personaService.addPersona(this.persona).subscribe(
      _ => this.location.back()
    );
  }

}
