import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';

import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { ModifierAdministrateurComponent } from './modifier-administrateur/modifier-administrateur.component';
import { ProfilComponent } from './profil/profil.component';
import { AjouterPartenaireComponent } from './ajouter-partenaire/ajouter-partenaire.component';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
import { ModifierPartenaireComponent } from './modifier-partenaire/modifier-partenaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    AjouterPartenaireComponent, 
    ModifierPartenaireComponent,
    ListeAdminComponent,
    ListePartenaireComponent, 
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    IndexComponent,
    FooterComponent,
    ModifierAdministrateurComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
