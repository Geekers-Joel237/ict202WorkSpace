import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),

  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'formation',
    loadChildren: () => import('./pages/formation/formation.module').then( m => m.FormationPageModule)
  },
  {
    path: 'competence',
    loadChildren: () => import('./pages/competence/competence.module').then( m => m.CompetencePageModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'langue',
    loadChildren: () => import('./pages/langue/langue.module').then( m => m.LanguePageModule)
  },
  {
    path: 'loisir',
    loadChildren: () => import('./pages/loisir/loisir.module').then( m => m.LoisirPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
