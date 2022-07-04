import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICertification } from 'src/app/models/model';
import { DataService } from 'src/app/services/crudApi.service';

@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.scss']
})
export class CertificationsListComponent implements OnInit {

  @Input() certificationsInput!: any[];
  constructor(
    private dataService:DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:any){
    this.dataService.deleteCertification(item);
    console.log('certification supprimee');
    
  }

  onEdit(item:any){
    this.router.navigateByUrl("/editCertification/"+item.id);
    
  }
}
