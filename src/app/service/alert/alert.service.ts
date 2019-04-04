import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public Alert: AlertController) { }


 async presentAlert(header, subHeader) {
    const alert = await this.Alert.create({
      header: header,
      message: subHeader,
      buttons: ['OK']
    });

    await alert.present();
  }

}
