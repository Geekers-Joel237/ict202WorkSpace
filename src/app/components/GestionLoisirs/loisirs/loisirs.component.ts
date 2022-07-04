import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ILoisir } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-loisirs',
  templateUrl: './loisirs.component.html',
  styleUrls: ['./loisirs.component.scss']
})
export class LoisirsComponent implements OnInit {

  constructor(
    private dateService:DataService,
    private fb: FormBuilder,
  ) { }
  loisirs!:any[];
  loisirFormGroup!: FormGroup;
  submitted:boolean= false

  ngOnInit(): void {
    this.loisirFormGroup = this.fb.group({
      nom:['',Validators.required]
    })

    this.getloisirs();
  }
  getloisirs() {
    this.dateService.getLoisirs()
    .subscribe((data)=>{
      console.log(data);
      this.loisirs = data;
    })
    
  }

  get nom(){return this.loisirFormGroup.get('nom');}


  onRegister():void{
    this.submitted = true;
    if(this.loisirFormGroup.invalid) {console.log('Invalid form group');return;}
    //nb ajouter un toast pour les notifs
    else{
      console.log('ici');

      this.dateService.createLoisir(this.loisirFormGroup.value).then((res)=>{
        console.log(res);

      })
    }
  }
}
