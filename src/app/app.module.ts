import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormationsComponent } from './components/GestionFormations/formations/formations.component';
import { CompetencesComponent } from './components/GestionCompetences/competences/competences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { CompetencesListComponent } from './components/GestionCompetences/competences/competences-list/competences-list.component';
import { EditCompetenceComponent } from './components/GestionCompetences/competences/edit-competence/edit-competence.component';
import { SettingsComponent } from './components/GestionUser/settings/settings.component';
import { GetPdfComponent } from './components/GestionPdf/get-pdf/get-pdf.component';
import { CertificationsComponent } from './components/GestionCertifications/certifications/certifications.component';
import { ExperiencesComponent } from './components/GestionExperiences/experiences/experiences.component';
import { LangagesComponent } from './components/GestionLangages/langages/langages.component';
import { LoisirsComponent } from './components/GestionLoisirs/loisirs/loisirs.component';
import { LiensComponent } from './components/GestionLiens/liens/liens.component';
import { EditFormationComponent } from './components/GestionFormations/edit-formation/edit-formation.component';
import { FormationsListComponent } from './components/GestionFormations/formations-list/formations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CompetencesComponent,
    FormationsComponent,
    CompetencesListComponent,
    EditCompetenceComponent,
    SettingsComponent,
    GetPdfComponent,
    CertificationsComponent,
    ExperiencesComponent,
    LangagesComponent,
    LoisirsComponent,
    LiensComponent,
    EditFormationComponent,
    FormationsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
