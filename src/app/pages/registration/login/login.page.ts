import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import {Usuario} from '../../../interfaces/users'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  }
  users:Usuario[];

  frmlogin: FormGroup;
  constructor(public fb: FormBuilder, 
    private router:Router, 
    private alertController:AlertController,
    public datasv:DataService,
    public navCtrl: NavController 
    ) {
    
    this.frmlogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
    
   }

  async ngOnInit() {
    this.datasv.setPerfil(this.usuario.username+"");
    fetch('../assets/data.json').then(response => {
      return response.json();
    }).then(data =>{
      this.users = data
      
      console.log(this.users);
    })
  }

  checkUsr(usr:string){
    for (let usr of this.users) {
      
    }
  }
  

  onSubmit(){
    console.log("hola");
    var f = this.frmlogin.value
    this.usuario['username'] = f.usuario
    this.usuario['password'] = f.password
    var name = this.usuario.username
    var pass = this.usuario.password

    if ((name=="richard" && pass == "1234") || (name=="wacoldo" && pass=="1234")) {
      console.log("pasaste");
      let navigationExtras:NavigationExtras={
        state:{
          requestUser: name,
          msg: "mensaje"
        }
      }
      this.router.navigate(['/home'], navigationExtras)
      console.log(navigationExtras);
    }
    else{
      this.presentAlert();
      console.log("fallaste, vuelve a intentarlo");
    }
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: ' Usuario O contraseña incorrectos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            console.log('Alert canceled');
          },
        },
      ],
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'miclase', 
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }
}
