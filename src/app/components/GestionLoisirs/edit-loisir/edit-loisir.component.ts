import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILoisir } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-edit-loisir',
  templateUrl: './edit-loisir.component.html',
  styleUrls: ['./edit-loisir.component.scss']
})
export class EditLoisirComponent implements OnInit {

  loisirId!:string;
  loisirFormGroup!: FormGroup;
  ancien:any;
 

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:DataService,
    private fb:FormBuilder,
  ) {
    this.loisirId = this.activedRoute.snapshot.params['id'];
    this.dataService.getLoisirById(this.loisirId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.loisirId;
      }
    )
   }

  ngOnInit(): void {
    console.log(this.loisirId);
    this.dataService.getLoisirById(this.loisirId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.loisirFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          nom:[data['nom'],Validators.required],
        })
      }
    })
  }
  onUpdateLoisir(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.loisirFormGroup.value);

    this.dataService.updateLoisir(this.ancien,this.loisirFormGroup.value);
   alert("Update");
  }
}
