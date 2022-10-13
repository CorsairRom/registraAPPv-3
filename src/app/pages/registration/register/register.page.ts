import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  frmRecuperar: FormGroup;
  constructor(public fb: FormBuilder) {
    this.frmRecuperar = this.fb.group({
      'usuario': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

}
