import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Partenaire } from '../Model/partenaire.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
totalAdmin:number=0;
totalPartenaire:number=0;


  constructor(private service:CrudService ) { }

  ngOnInit(): void {
      this.service.getAdmin().subscribe(admin =>{
      this.totalAdmin=admin.length})

      this.service.getPartenaire().subscribe(Partenaire =>{
      this.totalPartenaire=Partenaire.length}) 


       

     
  }

}
