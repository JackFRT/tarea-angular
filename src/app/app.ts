import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Principal } from "./principal/principal";
import { Detalles } from "./detalles/detalles";
import { Servicios } from "./servicios/servicios";
import { Testimonios } from "./testimonios/testimonios";
import { Reservas } from "./reservas/reservas";
import { Pie } from "./pie/pie";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Principal, Detalles, Servicios, Testimonios, Reservas, Pie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clinicaDental');
}
