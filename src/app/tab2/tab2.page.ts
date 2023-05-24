import { Component } from '@angular/core';
import { User } from '../model/user';
import {AlertController} from '@ionic/angular'
import {Service} from '../services/service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}
  
  user = new User()
   Service = new Service();
  
  

  async presentAlert(tipo:string, texto:string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  save(){
this.presentAlert("aviso", "cadastrado");
//console.log(this.user);
this.Service.add(this.user);
  }

}
