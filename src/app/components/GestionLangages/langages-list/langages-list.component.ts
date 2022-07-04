import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILangage } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-langages-list',
  templateUrl: './langages-list.component.html',
  styleUrls: ['./langages-list.component.scss']
})
export class LangagesListComponent implements OnInit {

  @Input() langagesInput!: any[];
  constructor(
    private dataService:DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteLangue(item);
    console.log('Langue supprimée');
    
  }

  onEdit(item:any){
    this.router.navigateByUrl("/editLangage/"+item.id);
    
  }
}
