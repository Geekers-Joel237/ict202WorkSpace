import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ICertification } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor(
    private dateService:DataService,
    private fb: FormBuilder,
  ) { }
  certifications!:any[];
  certificationFormGroup!: FormGroup;
  submitted:boolean= false;


  ngOnInit(): void {
    this.certificationFormGroup = this.fb.group({
      title:['',Validators.required],
      organisme:['',Validators.required],
      categorie:['',Validators.required]
    })

    this.getCertifications();

  }
  getCertifications(){
    this.dateService.getCertifications()
    .subscribe((data)=>{
      console.log(data);
      this.certifications = data;
    })
    
  }

  get title(){return this.certificationFormGroup.get('title');}

  get organisme(){return this.certificationFormGroup.get('level');}

  get categorie(){return this.certificationFormGroup.get('categorie');}

  onRegister():void{
    this.submitted = true;
    if(this.certificationFormGroup.invalid) {console.log('Invalid form group');return;}
    //nb ajouter un toast pour les notifs
    else{
      console.log('ici');

      this.dateService.createCertification(this.certificationFormGroup.value).then((res)=>{
        console.log(res);

      })
    }
  }
}
