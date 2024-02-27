import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Partenaire } from '../Model/partenaire.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.css']
})
export class ListePartenaireComponent implements OnInit {
  listePartenaire:Partenaire[]
  constructor(private router:Router,private service:CrudService) { }
  onDeletePartenaire(partenaire : Partenaire) {
    if(confirm("Voulez vous supprimer ce partenaire ?")) {
     
      this.service.deletePartenaire(partenaire.id).subscribe(() => {
        this.router.navigate(['/listepartenaire']).then(() => {
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    this.service.getPartenaire().subscribe(partenaire=>{
     this.listePartenaire=partenaire
    })
    
   }
 
    }

