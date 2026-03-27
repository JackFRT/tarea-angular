import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.html'
})
export class Servicios {
  listaServicios = [
    { 
      icono: '🦷', 
      titulo: 'Odontología preventiva', 
      desc: 'Exámenes regulares y limpieza son la educación moderna para mantener una buena salud dental.',
      fondo: 'bg-green-50',
      boton: 'Leer más' 
    },
    { 
      icono: '⚡', 
      titulo: 'Odontología de emergencia', 
      desc: 'Atención inmediata para emergencias dentales, incluyendo dolores de muelas y traumatismos.',
      fondo: 'bg-pink-50',
      boton: 'Leer más' 
    },
    { 
      icono: '✨', 
      titulo: 'Odontología cosmética', 
      desc: 'Mejora tu sonrisa con el blanqueamiento de dientes, carillas dentales y transformaciones.',
      fondo: 'bg-orange-50',
      boton: 'Leer más'
    },
    { 
      icono: '🛡️', 
      titulo: 'Cuidado periodontal', 
      desc: 'Tratamiento integral para la enfermedad periodontal, incluyendo raspado y cirugía.',
      fondo: 'bg-indigo-50',
      boton: 'Leer más'
    }
  ];
}