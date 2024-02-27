import { Component, OnInit } from '@angular/core';

import { Partenaire } from '../Model/partenaire.model';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-partenaire',
  templateUrl: './modifier-partenaire.component.html',
  styleUrls: ['./modifier-partenaire.component.css']
})
export class ModifierPartenaireComponent implements OnInit {
  currentPartenaire = new Partenaire()
  id : number;
  constructor(
    private service : CrudService ,
    private router: Router,
    private ActivatedRoute: ActivatedRoute ) { }
  onUpdatPartenaire(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    console.log(this.id)
    this.service.updatePartenaire(this.id ,this.currentPartenaire).subscribe(partenaire =>{
      this.router.navigate(['/listepartenaire']).then(() => {
      window.location.reload()
  
      })
    })
  }




  ngOnInit(): void {this.service.findPartenaireById(this.ActivatedRoute.snapshot.params['id']).subscribe(partenaire =>
    this.currentPartenaire=partenaire)
   console.log(this.currentPartenaire)
  }
 

}
