import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss']
})
export class Tab9Page implements OnInit {

  constructor(public loadingController: LoadingController) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Enviando',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  ngOnInit() {
  }

}
