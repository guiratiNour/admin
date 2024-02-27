import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifier-administrateur',
  templateUrl: './modifier-administrateur.component.html',
  styleUrls: ['./modifier-administrateur.component.css']
})
export class ModifierAdministrateurComponent implements OnInit {

  currentAdmin = new Admin()
  id : number;
  constructor(
    private service : CrudService ,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  

  ) { }
  onUpdatAdmin(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    console.log(this.id)
    this.service.updateAdmins(this.id ,this.currentAdmin).subscribe(produit =>{
      this.router.navigate(['/liste-admin']).then(() => {
      window.location.reload()
  
      })
    })
  }




  ngOnInit(): void {this.service.findAdminById(this.ActivatedRoute.snapshot.params['id']).subscribe(produit =>
    this.currentAdmin=produit)
   console.log(this.currentAdmin)

}}
