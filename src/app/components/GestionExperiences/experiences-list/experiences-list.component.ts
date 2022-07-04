import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompetence } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';


@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit {

  @Input() experiencesInput!: any[];
  constructor(
    private dataService:DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteExperience(item);
    console.log('experience supprimee');
    
  }

  onEdit(item:any){
    this.router.navigateByUrl("/editExperience/"+item.id);
    
  }

}
