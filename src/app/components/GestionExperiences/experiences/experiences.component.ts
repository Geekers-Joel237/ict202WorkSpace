import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(
    private dateService:DataService,
    private fb: FormBuilder,
  ) { }

    experiences!:any[];
    experienceFormGroup!: FormGroup;
    submitted:boolean= false;

  ngOnInit(): void {
    this.experienceFormGroup = this.fb.group({
      poste:['', Validators.required],
      entreprise:['', Validators.required],
      periode:['', Validators.required],
      detail: ['', Validators.required],
      country:['', Validators.required]
    })
 
    this.getExperiences();


  }
  getExperiences(){
    this.dateService.getExperiences()
    .subscribe((data)=>{
      console.log(data);
      this.experiences = data;
  })
}

get poste(){return this.experienceFormGroup.get('poste');}

  get entreprise(){return this.experienceFormGroup.get('entreprise');}

  get periode(){return this.experienceFormGroup.get('periode');}

  get detail(){return this.experienceFormGroup.get('detail');}

  get country(){return this.experienceFormGroup.get('country');}

  onRegister():void{
    this.submitted = true;
    if(this.experienceFormGroup.invalid) {console.log('Invalid form group');return;}
    //nb ajouter un toast pour les notifs
    else{
      console.log('ici');

      this.dateService.createExperience(this.experienceFormGroup.value).then((res)=>{
        console.log(res);

      })
    }
  }
}
