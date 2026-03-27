import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.html'
})
export class Reservas {
  reservaConfirmada = false;

  datosContacto = [
    { tipo: 'Teléfono:', valor: '+(33)7 45 55 87 71' },
    { tipo: 'Correo:', valor: 'spineedge@gmail.com' }
  ];

  horariosDisponibles = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '04:00 PM',
    '05:30 PM'
  ];

  enviarReserva() {
    this.reservaConfirmada = true;
  }

  nuevaReserva() {
    this.reservaConfirmada = false;
  }
}