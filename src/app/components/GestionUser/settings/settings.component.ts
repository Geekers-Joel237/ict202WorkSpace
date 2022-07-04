import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // currentUser$ = authState(this.auth);


  fullName:null|undefined|string ='';
  email:string='';
  birthDay:Date = new Date();
  mobile:string = '';
  address:string = '';

  constructor() { }

  ngOnInit(): void {
    alert(this.fullName);
    this.fullName =  firebase.default.auth().currentUser?.email;
  }

}
