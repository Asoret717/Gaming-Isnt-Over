import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  showAlert(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = this.alertCtrl.create({
      header: 'Not done yet',
      subHeader: 'This is for a future update maybe',
      cssClass: 'AlertCSS',
      message: "Enjoy your visit!",
      buttons: ['Ok']
    });
    (await alert).present();
  }
}
