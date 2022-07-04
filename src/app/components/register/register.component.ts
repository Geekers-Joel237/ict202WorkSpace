import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    username: new FormControl('',[Validators.required])
  })
  constructor(
    private router: Router,
    private authservice: AuthserviceService,
    private toast:HotToastService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (!this.loginForm.valid)  return;
    const {username,email,password} = this.loginForm.value;
    this.authservice.signUp(username,email,password).pipe(
      this.toast.observe(
        {
          success:"Congrats! You are all signed up",
          loading:"Signing in",
          error:({message}) => `${message}`
        }
      )
    ).subscribe(()=>{
      this.router.navigate(['/login']);
    })

    console.warn(this.loginForm.value);
  }
  get username(){return this.loginForm.get('username');}

  get email(){return this.loginForm.get('email');}

  get password(){return this.loginForm.get('password');}

  onLogin(){
    this.router.navigate(['/login']);
  }

}
