import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  favorito: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.favorito = !this.favorito;
  }
}
