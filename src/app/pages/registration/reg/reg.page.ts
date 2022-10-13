import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  frmRegistrar: FormGroup;
  constructor(public frm:FormBuilder,
              private rt : Router
  ) { 
    this.frmRegistrar = this.frm.group({
      'nombre' : new FormControl("", Validators.required),
      'password1': new FormControl("", Validators.required),
      'password2': new FormControl("",Validators.required),
      'email':  new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }

  onSubmit(){

  }

}
