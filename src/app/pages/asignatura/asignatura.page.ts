import { Component, OnInit } from '@angular/core';

interface asignatura{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  componentes: asignatura[] = [
    {
    icon: 'assets/icon/cursos/portafolio.png',
    name: 'aplicaciones wed',
    redirectTo: '/seccion'
    },
    
    {
    icon: 'assets/icon/cursos/analitica.png',
    name: 'arquitectura ',
    redirectTo: '/seccion'
    },
    {
    icon: 'assets/icon/cursos/arquitectura.png',
    name: 'aplicaciones móviles',
    redirectTo: '/seccion'
    },

  ]


  constructor() { }

  ngOnInit() {
  }

}
