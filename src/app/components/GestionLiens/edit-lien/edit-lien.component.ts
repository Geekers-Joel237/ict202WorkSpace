import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILien } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-edit-lien',
  templateUrl: './edit-lien.component.html',
  styleUrls: ['./edit-lien.component.scss']
})
export class EditLienComponent implements OnInit {

  lienId!:string;
  lienFormGroup!: FormGroup;
  ancien:any;

  constructor(
    private activedRoute:ActivatedRoute,
    private dataService:DataService,
    private fb:FormBuilder,
  ) { 
    this.lienId = this.activedRoute.snapshot.params['id'];
    this.dataService.getLiensById(this.lienId).subscribe(
      (data)=>{
        this.ancien = data;
        this.ancien.id = this.lienId;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.lienId);
    this.dataService.getLiensById(this.lienId)
    .subscribe((data)=>{
      console.log(data);
      if(data != undefined){
        this.lienFormGroup  = this.fb.group({
          // id:[data['id'],Validators.required],
          title:[data['title'],Validators.required],
          url:[data['url'],Validators.required],
        })
      }
    })
  }

  onUpdateLien(){
    console.log('ancien->',this.ancien);
    console.log('nouveau->',this.lienFormGroup.value);

    this.dataService.updateLien(this.ancien,this.lienFormGroup.value);
   alert("Update");
  }
}
