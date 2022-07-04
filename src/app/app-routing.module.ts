import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard'
import { CompetencesComponent } from './components/GestionCompetences/competences/competences.component';
import { EditCompetenceComponent } from './components/GestionCompetences/competences/edit-competence/edit-competence.component';
import { SettingsComponent } from './components/GestionUser/settings/settings.component';
import { GetPdfComponent } from './components/GestionPdf/get-pdf/get-pdf.component';
import { CertificationsComponent } from './components/GestionCertifications/certifications/certifications.component';
import { ExperiencesComponent } from './components/GestionExperiences/experiences/experiences.component';
import { LangagesComponent } from './components/GestionLangages/langages/langages.component';
import { FormationsComponent } from './components/GestionFormations/formations/formations.component';
import { LoisirsComponent } from './components/GestionLoisirs/loisirs/loisirs.component';
import { LiensComponent } from './components/GestionLiens/liens/liens.component';
import { EditFormationComponent } from './components/GestionFormations/edit-formation/edit-formation.component';
//import { EditExperienceComponent } from './components/GestionExperiences/experiences/edit-experience/edit-experience.component';
//import { EditCertificationComponent } from './components/GestionCertifications/edit-certification/edit-certification.component';
import { EditLoisirComponent } from './components/GestionLoisirs/edit-loisir/edit-loisir.component';
import { EditLangageComponent } from './components/GestionLangages/edit-langage/edit-langage.component';
import { EditCertificationComponent } from './components/GestionCertifications/certifications/edit-certification/edit-certification.component';
import { EditExperienceComponent } from './components/GestionExperiences/edit-experience/edit-experience.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {path:"",pathMatch:'full', component:HomeComponent},
  {path:"login",component:LoginComponent,...canActivate(redirectToHome)},
  {path:"register",component:RegisterComponent,...canActivate(redirectToHome)},
  {
    path:"dashboard",
    component:DashboardComponent,
    ...canActivate(redirectToLogin),
    children: [
      {path:"competences",component:CompetencesComponent},
      {path:"formations",component:FormationsComponent},
      {path:"experiences",component:ExperiencesComponent},
      {path:"certifications",component:CertificationsComponent},
      {path:"loisirs",component:LoisirsComponent},
      {path:"langages",component:LangagesComponent},
      {path:"liens",component:LiensComponent},
      {path:"getPdf",component:GetPdfComponent},



    ]
  },
  {path:"editCompetence/:id",component:EditCompetenceComponent},
  {path:"editFormation/:id",component:EditFormationComponent},
  {path:"editExperience/:id",component:EditExperienceComponent},
  {path:"editCertification/:id",component:EditCertificationComponent},
  {path:"editLangage/:id",component:EditLangageComponent},
 {path:"editLoisir/:id",component:EditLoisirComponent},
  {path:"settings",component:SettingsComponent},

    




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})
export class AppRoutingModule { }
