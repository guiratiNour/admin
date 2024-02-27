import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
  newAdmin=new Admin();
  addadminForm:FormGroup;

  constructor(private service:CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) { 
      let formControls = {
        nom: new FormControl('',[
          Validators.required,
          
        ]),
        prenom: new FormControl('',[
          Validators.required,
         
        ]),
   
      
        mdp: new FormControl('',[
          Validators.required,
         
        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.email,
         
        ]),
      }
      this.addadminForm = this.fb.group(formControls)
    }
    get nom() {
      return this.addadminForm.get('nom');
    }
    get prenom() {
      return this.addadminForm.get('prenom');
    }
    get mdp() {
      return this.addadminForm.get('mdp');
    }
    get email() {
      return this.addadminForm.get('email');
    }
  
    addNewAdmin() {
      let data = this.addadminForm.value;
      console.log(data);
      let admin = new Admin(
       undefined, data.nom,data.prenom,data.mdp,data.email);
      console.log(admin);
      
      if (
        data.nom == 0 ||
        data.prenom == 0 ||
        data.mdp == 0||
        data.email == 0 
        )
     {
        this.toast.info({
          detail: 'Error Message',
          summary: 'Remplir votre champs',
        });
      } else {
      this.service.addNewAdmin(admin).subscribe(
        res=>{
          console.log(res);
          this.toast.success({
            detail: 'Succes Message',
            summary: 'Message est Envoyée',
          });
          
          this.router.navigate(['/liste-admin']).then(() => {
            window.location.reload()
        
            })

    
    
    ;
        },
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          }); }
      )
  
      }
    }
  
  
  


  ngOnInit(): void {
  }

}

