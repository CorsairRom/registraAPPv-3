import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username:string='';
  usr: string='';
  opc:boolean=false;
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private menu:MenuController,
    public datasv:DataService,
    public navCtrl: NavController 
  ) {
    
    this.activatedRouter.queryParams.subscribe(params=>{
      if (this.router.getCurrentNavigation().extras.state) {
        let usuario = this.router.getCurrentNavigation().extras.state.requestUser;
        this.username = usuario
        console.log(this.username);
      }
      if (this.username=='richard') {
        this.opc=true;
      }
    })
  }
  verMenu(){
    this.menu.toggle('first');
  }
  async ngOnInit() {
    this.usr=await this.datasv.getPerfil()+"";
    console.log(this.datasv.getPerfil() + " <---este es el usr");
  }
}
