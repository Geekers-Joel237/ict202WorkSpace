import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public pages: any[] = [
    {title: 'PROFILE', url: '/profile', icon: 'information-circle'},
    {title: 'FORMATIONS', url: '/formation', icon: 'information-circle'},
    {title: 'COMPETANCES', url: '/competence', icon: 'podium'},
    {title: 'EXPERIENCES', url: '/experience', icon: 'color-wand'},
    {title: 'LANGUES', url: '/langue', icon: 'color-wand'},
    {title: 'LOISIRS', url: '/loisir', icon: 'color-wand'},
    {title: 'A propos', url: '/about', icon: 'information-circle'},
    {title: 'Sign Out', url: '/login', icon: 'log-out'},
  ];


  constructor(
    
  ) { 
  }

  ngOnInit() {
}

}
