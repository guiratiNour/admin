import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userDetails:any;
 
  constructor(private service:CrudService,private router:Router) {
    this.userDetails = this.service.userDetails();
   }

  ngOnInit(): void {
    console.log(this.userDetails);
  }
}
