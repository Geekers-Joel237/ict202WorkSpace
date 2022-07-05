import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formations!:any[];
  formationFormGroup!: FormGroup;
  submitted:boolean= false;
  constructor(
    private dataService: DataService,
    private fb:FormBuilder,


  ) { }

  ngOnInit(): void {
    this.formationFormGroup = this.fb.group({
      diplome:['',Validators.required],
      ecole:['',Validators.required],
       periode:['',Validators.required],
      categorie:['',Validators.required],
    })

    this.getFormations();
  }

  getFormations(){
    this.dataService.getFormations()
    .subscribe((data)=>{
      console.log(data);
      this.formations = data;
    })
    
  }

  get diplome(){return this.formationFormGroup.get('diplome');}

  get ecole(){return this.formationFormGroup.get('ecole');}

  get periode(){return this.formationFormGroup.get('periode');}

  get categorie(){return this.formationFormGroup.get('categorie');}



  onRegister():void{
    this.submitted = true;
    if(this.formationFormGroup.invalid) {console.log('Invalid form group');return;}
    //nb ajouter un toast pour les notifs
    else{
      console.log('ici');

      this.dataService.createFormation(this.formationFormGroup.value).then((res)=>{
        console.log(res);

      })
    }
  }

}
