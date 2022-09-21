import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userLogin } from '../../../../../utils/userData';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formlogin: FormGroup ;
  userTest = userLogin
  constructor(private formBuilder: FormBuilder,private router:Router) { 
    this.formlogin = this.formBuilder.group({
      // email: ['', [
      //   Validators.required,
      //   Validators.maxLength(30),
      //   Validators.minLength(3),
      //   //Validators.email
      // ]],
      userName: ['', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
        //Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]]
    })
  }

  ngOnInit(): void {
  }

  submit = () => {

    if(this.userTest.userName === this.formlogin.getRawValue().userName && this.userTest.password === this.formlogin.getRawValue().password)
    this.router.navigate(['/pages']);
    else
    console.log('Credenciales incorrectas');

  }

}
