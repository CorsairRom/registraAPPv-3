import { Injectable } from '@angular/core';
import{Usuario} from '../interfaces/users'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:Usuario;
  username:string='';
  opc:boolean=false;
  constructor() { }

  getPerfil(){
    return this.opc;
  }
  setPerfil(usr: any){
    if (this.username=="richard"){
      this.opc=!this.opc;
      this.username=usr;
    }
  }

  async setUser(){
    fetch('../assets/data.json').then(response => {
      return response.json();
    }).then(data =>{
      this.users = data;
      
    })
  }
 getUser(){
   this.users;
  }
}
