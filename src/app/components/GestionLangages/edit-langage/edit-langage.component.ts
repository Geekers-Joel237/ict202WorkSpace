import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILangage } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-edit-langage',
  templateUrl: './edit-langage.component.html',
  styleUrls: ['./edit-langage.component.scss']
})
export class EditLangageComponent implements OnInit {

  langageId!:string;
  langageFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:DataService,
    private fb:FormBuilder,
  ) { 
    this.langageId = this.activedRoute.snapshot.params['id'];
    this.dataService.getLangueById(this.langageId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.langageId;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.langageId);
    this.dataService.getLangueById(this.langageId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.langageFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          nom:[data['nom'],Validators.required],
          level:[data['level'],Validators.required],
        })
      }
    })
  }

  onUpdateLangage(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.langageFormGroup.value);

    this.dataService.updateLangue(this.ancien,this.langageFormGroup.value);
   alert("Update");
  }
}
