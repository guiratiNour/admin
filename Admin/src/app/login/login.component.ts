import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private service:CrudService,
    private router:Router,private toast:NgToastService
  ) { 
    let formControls = {
      mdp: new FormControl('',[
        Validators.required,
       
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
        
      ]),
     
    }

    this.loginForm = this.fb.group(formControls)
  }


  get mdp() { return this.loginForm.get('mdp') }
  get email() { return this.loginForm.get('email') }
  login() {
    let data = this.loginForm.value;
    console.log(data);
    let admin = new Admin(null,null, null,data.mdp,data.email);
    console.log(admin);
    if (
  
      data.email == 0 ||
      data.mdp == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
  
      this.service.loginAdmin(admin).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",token);
          this.router.navigate(['index']).then(() => {
            window.location.reload()
        
            })

    
    
    ;
        },
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          });
          
        }
      )
      
    }
    }
  
  
  
  

ngOnInit(): void {
  let isLoggedIn = this.service.isLoggedIn();
    

  if (isLoggedIn) {
    this.router.navigate(['login']);
  } 
}
}