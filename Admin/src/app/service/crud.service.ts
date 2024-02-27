import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin.model';
import {  Partenaire } from '../Model/partenaire.model';


const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  helper=new JwtHelperService();
  apiurl="http://localhost:8081/api"
  loginUserUrl="http://localhost:8081/api/admin/login"
  constructor(private http:HttpClient) { }
  addNewAdmin(admin:Admin){
    return this.http.post<any>(this.apiurl+"/admin", admin);
  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiurl + "/admin");
  }
  
  


  addNewPartenaire(partenaire: Partenaire) {
    return this.http.post<any>(this.apiurl+"/partenaire", partenaire);
  }
  getPartenaire(): Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.apiurl + "/partenaire");
  }
  deleteAdmin(id : number){
    const url = `${this.apiurl+"/admin"}/${id}`
    return this.http.delete(url , httpOptions)
  }
 
  deletePartenaire(id : number){
    const url = `${this.apiurl+"/partenaire"}/${id}`
    return this.http.delete(url , httpOptions)
  }
  
  
  modifierAdmin(a:Admin):Observable<Admin>
{
  const url=`${this.apiurl+"/admin"}${a.id}`;
  return this.http.put<Admin>(url, a,httpOptions);
}

loginAdmin(admin:Admin){
  return this.http.post<any>(this.loginUserUrl, admin);
}
isLoggedIn(){

  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
updateAdmins(id: number,admin : Admin) : Observable<Admin>{
  const url = `${this.apiurl+"/admin"}/${id}`;
  return this.http.put<Admin>(url ,admin, httpOptions);
}
findAdminById(id : number): Observable<Admin> {
  const url = `${this.apiurl + "/admin"}/${id}`;
  return this.http.get<Admin>(url,httpOptions);
}

updatePartenaire(id: number,partenaire : Partenaire) : Observable<Partenaire>{
  const url = `${this.apiurl+"/partenaire"}/${id}`;
  return this.http.put<Partenaire>(url ,partenaire,httpOptions);
}
findPartenaireById(id : number): Observable<Partenaire> {
  const url = `${this.apiurl + "/partenaire"}/${id}`;
  return this.http.get<Partenaire>(url,httpOptions);
}


userDetails(){
  let token:any=localStorage.getItem('myToken');
  let decodeToken= this.helper.decodeToken(token);
   return decodeToken.data;
 }
 







}












































