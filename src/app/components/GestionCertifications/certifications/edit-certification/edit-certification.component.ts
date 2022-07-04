import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICompetence } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {

  certificationId!:string;
  certificationFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:DataService,
    private fb:FormBuilder,
  ) {
    this.certificationId = this.activedRoute.snapshot.params['id'];
    this.dataService.getCertificationById(this.certificationId).subscribe(
      (data)=>{
        this.ancien = data;
      }
    )
   }

  ngOnInit(): void {
    console.log(this.certificationId);
    this.dataService.getCertificationById(this.certificationId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.certificationFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          title:[data['title'],Validators.required],
          organisme:[data['organisme'],Validators.required],
           categorie:[data['categorie'],Validators.required],
        })
      }
    })
  }

  onUpdateCertification(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.certificationFormGroup.value);

    this.dataService.updateCertification(this.ancien,this.certificationFormGroup.value);
   alert("Update");
  }
}
