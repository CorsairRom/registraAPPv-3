import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[DataService]
})
export class AppComponent {
  username:string='';
  opc:boolean=false;
  constructor(
    private menu:MenuController,
    public datasv:DataService,
    public navCtrl: NavController 
    ) {this.opc=this.datasv.getPerfil()}
   
  cerrarMenu()
  {
    this.menu.close('first');
  }
}
