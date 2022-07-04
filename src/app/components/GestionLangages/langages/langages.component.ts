import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ILangage} from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.scss']
})
export class LangagesComponent implements OnInit {

  constructor(
    private dateService:DataService,
    private fb: FormBuilder,
   ) { }
   langages!:any[];
   langagesFormGroup!: FormGroup;
   submitted:boolean= false;
 
 
   ngOnInit(): void {
     this.langagesFormGroup = this.fb.group({
       nom:['',Validators.required],
       level:['',Validators.required]
     })
 
     this.getLangages();
     
      
 
   }
  getLangages() {
     this.dateService.getLangues()
     .subscribe((data)=>{
       console.log(data);
       this.langages = data;
     })
     
   }
 
   get nom(){return this.langagesFormGroup.get('title');}
 
   get level(){return this.langagesFormGroup.get('level');}
 
 
 
   onRegister():void{
     this.submitted = true;
     if(this.langagesFormGroup.invalid) {console.log('Invalid form group');return;}
     //nb ajouter un toast pour les notifs
     else{
       console.log('ici');
 
       this.dateService.createLangue(this.langagesFormGroup.value).then((res)=>{
         console.log(res);
 
       })
     }
   }
 }
 