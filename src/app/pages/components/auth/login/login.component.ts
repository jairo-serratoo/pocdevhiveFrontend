import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formlogin: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) {
    ///

    this.formlogin = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })

    //
   }

  ngOnInit(): void {
  }

  submit = () => {
    this.router.navigate(['/pages']);
  }

}
