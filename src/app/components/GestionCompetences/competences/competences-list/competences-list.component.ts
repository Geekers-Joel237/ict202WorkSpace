import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompetence } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-competences-list',
  templateUrl: './competences-list.component.html',
  styleUrls: ['./competences-list.component.scss']
})
export class CompetencesListComponent implements OnInit {

  @Input() competencesInput!: any[];
  constructor(
    private dataService:DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteCompetence(item);
    console.log('competence supprimee');
    
  }

  onEdit(item:any){
    this.router.navigateByUrl("/editCompetence/"+item.id);
    
  }
}
