import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(
      personasRecibidas => this.personas = personasRecibidas
    );
  }

  onBorrar(id: number) {
    console.log('Borrar', id);
    this.personaService.borrarPersona(id).subscribe(
      () => {
        console.log('Borrando', id);
        return this.personaService.getPersonas().subscribe(personasRecibidas => {
          console.log(personasRecibidas);
          return this.personas = personasRecibidas;
        });
      }
    );
  }
}
