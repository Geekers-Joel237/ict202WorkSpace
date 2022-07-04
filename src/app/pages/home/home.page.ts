import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public pages: any[] = [
    {title: 'FORMATION', url: '/formation', icon: 'information-circle'},
    {title: 'COMPETANCE', url: '/competence', icon: 'podium'},
    {title: 'EXPERIENCE', url: '/experience', icon: 'color-wand'},
    {title: 'Apropos', url: '/about', icon: 'information-circle'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];


  constructor(
    
  ) { 
  }

  ngOnInit() {
}

}
