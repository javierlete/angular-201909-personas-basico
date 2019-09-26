import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Persona[] = [
    { id: 1, nombre: 'Javier Lete', email: 'javierlete@email.com' },
    { id: 2, nombre: 'Pepe Pérez', email: 'pepeperez@email.com' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
