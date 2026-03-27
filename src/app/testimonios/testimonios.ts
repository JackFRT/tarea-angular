import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.html'
})
export class Testimonios {
  listaTestimonios = [
    {
      nombre: 'María González',
      comentario: 'El mejor trato que he recibido. Perdí el miedo a ir al dentista gracias a su paciencia.',
      estrellas: '⭐⭐⭐⭐⭐',
      foto: 'https://i.pravatar.cc/150?img=5'
    },
    {
      nombre: 'Carlos Ruiz',
      comentario: 'Muy profesionales. Fui por una emergencia y me atendieron rapidísimo y sin dolor.',
      estrellas: '⭐⭐⭐⭐⭐',
      foto: 'https://i.pravatar.cc/150?img=11'
    },
    {
      nombre: 'Ana López',
      comentario: 'Me hice un blanqueamiento y los resultados fueron increíbles. 100% recomendados.',
      estrellas: '⭐⭐⭐⭐',
      foto: 'https://i.pravatar.cc/150?img=9'
    }
  ];
}