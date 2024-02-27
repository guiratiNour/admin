import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent implements OnInit {
  listeAdmin:Admin[]

  constructor(private router:Router,private service:CrudService) { }
  onDeleteAdmin(admin : Admin) {
    if(confirm("Voulez vous supprimer cet administrateur ?")) {
     
      this.service.deleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/liste-admin']).then(() => {
          window.location.reload()
        })
      })
    }
  }

  ngOnInit(): void {
   this.service.getAdmin().subscribe(admin=>{
    this.listeAdmin=admin
   })
   
  }


}
