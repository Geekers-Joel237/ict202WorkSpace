import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, Note, Competence } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() Id: string;
  note: Note = null;  
  competence : Competence =null;
  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getNoteById(this.Id).subscribe(res => {
      this.note = res;
    });

    this.dataService.getCompetenceById(this.Id).subscribe(res => {
      this.competence = res;
    });
  }

  async updateNote(){
    this.dataService.updateNote(this.note);
    const toast = await this.toastCtrl.create({
      message: "Experience updated !",
      duration: 1000
    });
    toast.present()
  }

  async deleteNote(){
    await this.dataService.deleteNote(this.note)
    this.modalCtrl.dismiss()
  }

  async updateComptence(){
    this.dataService.updateCompetence(this.competence);
    const toast = await this.toastCtrl.create({
      message: "Skill updated !",
      duration: 1000
    });
    toast.present()
  }

  async deleteCompetence(){
    await this.dataService.deleteCompetence(this.competence)
    this.modalCtrl.dismiss()
  }

}
