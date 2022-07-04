import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent implements OnInit {

  experienceId!:string;
  experienceFormGroup!: FormGroup;
  ancien:any;
  
  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:DataService,
    private fb:FormBuilder,
  ) { 
    this.experienceId = this.activedRoute.snapshot.params['id'];
    this.dataService.getExperienceById(this.experienceId).subscribe(
      (data)=>{
        this.ancien = data;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.experienceId);
    this.dataService.getExperienceById(this.experienceId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.experienceFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          poste:[data['poste'],Validators.required],
          entreprise:[data['entreprise'],Validators.required],
          periode:[data['periode'],Validators.required],
          detail:[data['detail'],Validators.required],
          country:[data['country'],Validators.required],
        })
      }
    })
  }
  
  onUpdateExperience(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.experienceFormGroup.value);

    this.dataService.updateExperience(this.ancien,this.experienceFormGroup.value);
   alert("Update");
  }
}
