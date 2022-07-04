import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoisir} from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-loisirs-list',
  templateUrl: './loisirs-list.component.html',
  styleUrls: ['./loisirs-list.component.scss']
})
export class LoisirsListComponent implements OnInit {

  @Input() loisirsInput!: any[];
  constructor(
    private dataService:DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteLoisir(item);
    console.log('loisir supprimé!');
    
  }

  onEdit(item:any){
    this.router.navigateByUrl("/editLoisir/"+item.id);
    
  }
}
