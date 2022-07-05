import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILien } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-liens-list',
  templateUrl: './liens-list.component.html',
  styleUrls: ['./liens-list.component.scss']
})
export class LiensListComponent implements OnInit {

  @Input() liensInput!: any[];
  constructor(
    private dataService:DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteLien(item);
    console.log('lien supprime');
    
  }

  onEdit(item:any){
    this.router.navigateByUrl("/editlien/"+item.id);
    
  }
}
