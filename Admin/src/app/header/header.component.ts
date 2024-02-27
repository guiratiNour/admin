import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails:any;
 
  constructor(private service:CrudService,private router:Router) {
    this.userDetails = this.service.userDetails();
   }

  ngOnInit(): void {
    console.log(this.userDetails);
  }
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/']);
    
  }

  
  
  
}
