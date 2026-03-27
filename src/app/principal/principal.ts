import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.html'
})
export class Principal {
  
  etiquetas = ['Raiz', 'Cuidado', 'Prevencion'];

  estadisticas = [
    { numero: '12+', linea1: 'Años de experiencia', linea2: 'y trabajo dental.' },
    { numero: '35', linea1: 'Especialistas certificados', linea2: 'en varios campos.' },
    { numero: '10+', linea1: 'Clinicas felices.', linea2: '' }
  ];

}