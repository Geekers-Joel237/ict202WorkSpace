import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ILien } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-liens',
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.scss']
})
export class LiensComponent implements OnInit {

  constructor(
    private dateService:DataService,
    private fb: FormBuilder,
   ) { }
   liens!:any[];
   liensFormGroup!: FormGroup;
   submitted:boolean= false;
 
 
   ngOnInit(): void {
     this.liensFormGroup = this.fb.group({
       title:['',Validators.required],
       url:['',Validators.required]
     })
 
     this.getLiens();
     
      
 
   }
  getLiens() {
     this.dateService.getLiens()
     .subscribe((data)=>{
       console.log(data);
       this.liens = data;
     })
     
   }
 
   get title(){return this.liensFormGroup.get('title');}
 
   get url(){return this.liensFormGroup.get('url');}
  
 
 
   onRegister():void{
     this.submitted = true;
     if(this.liensFormGroup.invalid) {console.log('Invalid form group');return;}
     //nb ajouter un toast pour les notifs
     else{
       console.log('ici');
 
       this.dateService.createLien(this.liensFormGroup.value).then((res)=>{
         console.log(res);
 
       })
     }
   }
 }
 