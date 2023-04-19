import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { ListPatientComponent } from './patient/list-patient/list-patient.component';
import { ListmedecinComponent } from './medecin/listmedecin/listmedecin.component';
import { AddMedecinComponent } from './medecin/add-medecin/add-medecin.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { AddDomaineComponent } from './domaine/add-domaine/add-domaine.component';
import { ListDomaineComponent } from './domaine/list-domaine/list-domaine.component';
import { AddSpecialiteComponent } from './specialite/add-specialite/add-specialite.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { AddConsultationComponent } from './consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from './consultation/list-consultation/list-consultation.component';
import { AddRdvComponent } from './rdv/add-rdv/add-rdv.component';
import { ListRdvComponent } from './rdv/list-rdv/list-rdv.component';
import { AddHoraireComponent } from './horaire/add-horaire/add-horaire.component';
import { ListHoraireComponent } from './horaire/list-horaire/list-horaire.component';
import { AddReglementComponent } from './reglement/add-reglement/add-reglement.component';
import { ListReglementComponent } from './reglement/list-reglement/list-reglement.component';
import { AddMedicamentComponent } from './medicament/add-medicament/add-medicament.component';
import { ListMedicamentComponent } from './medicament/list-medicament/list-medicament.component';
import { AddOrdonanceComponent } from './ordonance/add-ordonance/add-ordonance.component';
import { ListOrdonanceComponent } from './ordonance/list-ordonance/list-ordonance.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientComponent,
    ListmedecinComponent,
    AddMedecinComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    AddDomaineComponent,
    ListDomaineComponent,
    AddSpecialiteComponent,
    ListSpecialiteComponent,
    AddConsultationComponent,
    ListConsultationComponent,
    AddRdvComponent,
    ListRdvComponent,
    AddHoraireComponent,
    ListHoraireComponent,
    AddReglementComponent,
    ListReglementComponent,
    AddMedicamentComponent,
    ListMedicamentComponent,
    AddOrdonanceComponent,
    ListOrdonanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
