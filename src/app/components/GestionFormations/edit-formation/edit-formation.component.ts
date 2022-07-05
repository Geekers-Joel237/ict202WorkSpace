import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss']
})
export class EditFormationComponent implements OnInit {

  formationId!:string;
  formationFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:DataService,
    private fb:FormBuilder,
  ) { 
    this.formationId = this.activedRoute.snapshot.params['id'];
    console.log(this.formationId);
    this.dataService.getFormationsById(this.formationId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.formationId;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.formationId);
    this.dataService.getFormationsById(this.formationId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.formationFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          diplome:[data['diplome'],Validators.required],
          ecole:[data['ecole'],Validators.required],
          periode:[data['periode'],Validators.required],
          categorie:[data['categorie'],Validators.required],
        })
      }
    })
  }

  onUpdateFormation(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.formationFormGroup.value);

    this.dataService.updateFormation(this.ancien,this.formationFormGroup.value);
   alert("Update");
  }
}
