import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Partenaire } from '../Model/partenaire.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-partenaire',
  templateUrl: './ajouter-partenaire.component.html',
  styleUrls: ['./ajouter-partenaire.component.css']
})
export class AjouterPartenaireComponent implements OnInit {
  newPartenaire=new Partenaire();
  addpartenaireForm:FormGroup;

  constructor(private service:CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) { 
      let formControls = {
        nom: new FormControl('',[
          Validators.required,
          
        ]),
        prenom: new FormControl('',[
          Validators.required,
         
        ]),
   
      
        adresse: new FormControl('',[
          Validators.required,
         
        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.email,
         
        ]),
        mdp: new FormControl('',[
          Validators.required,
         
        ]),
        numtelephone: new FormControl('',[
          Validators.required,
         
        ]),
      }
      this.addpartenaireForm = this.fb.group(formControls)
    }
    get nom() {
      return this.addpartenaireForm.get('nom');
    }
    get prenom() {
      return this.addpartenaireForm.get('prenom');
    }
    get adresse() {
      return this.addpartenaireForm.get('adresse');
    }
    get email() {
      return this.addpartenaireForm.get('email');
    }
    get mdp() {
      return this.addpartenaireForm.get('mdp');
    }
    get numtelephone() {
      return this.addpartenaireForm.get('numtelephone');
    }
    
  
    addNewPartenaire() {
      let data = this.addpartenaireForm.value;
      console.log(data);
      let partenaire = new Partenaire(
       undefined, data.nom,data.prenom,data.adresse,data.email,data.mdp,data.numtelephone);
      console.log(partenaire);
      
      if (
        data.nom == 0 ||
        data.prenom == 0 ||
        data.adresse ==0 ||
        data.email == 0 ||
        data.mdp == 0||
        data.numtelephone==0
        
        )
     {
        this.toast.info({
          detail: 'Error Message',
          summary: 'Remplir votre champs',
        });
      } else {
      this.service.addNewPartenaire(partenaire).subscribe(
        res=>{
          console.log(res);
          this.toast.success({
            detail: 'Succes Message',
            summary: 'Message est Envoyée',
          });
          
          this.router.navigate(['/listepartenaire']).then(() => {
            window.location.reload()
        
            });
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


 
