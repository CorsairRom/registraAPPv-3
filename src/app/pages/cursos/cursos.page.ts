import { Component, OnInit } from '@angular/core';

interface Cursos {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  componentes: Cursos[] = [
    {
    icon: 'assets/icon/cursos/portafolio.png',
    name: 'Portafolio',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/etica.png',
    name: 'Etica',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/analitica.png',
    name: 'Estadistica',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/arquitectura.png',
    name: 'Arquitectura',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/eng.png',
    name: 'Ingles',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/calidad.png',
    name: 'Calidad',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/computadora.png',
    name: 'Aplicaciones móviles',
    redirectTo: '/asistencia'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
