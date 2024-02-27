import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { IndexComponent } from './index/index.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';
import { ModifierAdministrateurComponent } from './modifier-administrateur/modifier-administrateur.component';

import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from './service/authguard.service';
import { AjouterPartenaireComponent } from './ajouter-partenaire/ajouter-partenaire.component';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { ModifierPartenaireComponent } from './modifier-partenaire/modifier-partenaire.component';

const routes: Routes = [
  { path:'ajouteradmin',component:AjouterAdminComponent,canActivate:[AuthGuard]},
  { path:'liste-admin',component:ListeAdminComponent,canActivate:[AuthGuard]},
  { path:'ajouterpartenaire',component:AjouterPartenaireComponent,canActivate:[AuthGuard]}, 
  { path:'listepartenaire',component:ListePartenaireComponent,canActivate:[AuthGuard]}, 
  { path:'modifierpartenaire/:id',component:ModifierPartenaireComponent,canActivate:[AuthGuard]},
  { path:'modifieAdmin/:id',component:ModifierAdministrateurComponent,canActivate:[AuthGuard]},
  { path:'index',component:IndexComponent,canActivate:[AuthGuard]},
  { path:'',component:LoginComponent},
  { path:'profile',component:ProfilComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
