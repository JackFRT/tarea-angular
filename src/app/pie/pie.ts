import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.html'
})
export class Pie {
  
  anioActual = new Date().getFullYear();

  redesSociales = [
    { icono: 'f', enlace: '#' },
    { icono: 'ig', enlace: '#' },
    { icono: 'in', enlace: '#' }
  ];

  columnasFooter = [
    {
      titulo: 'Menu',
      enlaces: [
        { texto: 'Menu', link: '#' },
        { texto: 'Sobre nosotros', link: '#' },
        { texto: 'Servicios', link: '#' },
        { texto: 'Testimonial', link: '#' },
        { texto: 'Contacto', link: '#' }
      ]
    },
    {
      titulo: 'Servicios',
      enlaces: [
        { texto: 'Preventivos', link: '#' },
        { texto: 'Cosmeticos', link: '#' },
        { texto: 'Periodontal', link: '#' },
        { texto: 'Emergencias', link: '#' }
      ]
    },
    {
      titulo: 'Sobre nosotros',
      enlaces: [
        { texto: 'Nuestros Doctores', link: '#' },
        { texto: 'Nuestros Servicios', link: '#' },
        { texto: 'Tienda', link: '#' }
      ]
    },
    {
      titulo: 'Info',
      enlaces: [
        { texto: 'Sobre nosotros', link: '#' },
        { texto: 'FAQ', link: '#' },
        { texto: 'Contactanos', link: '#' }
      ]
    }
  ];

  enlacesLegales = [
    { texto: 'Terminos y Condiciones', link: '#' },
    { texto: 'Acuerdo de sociedad', link: '#' }
  ];
}