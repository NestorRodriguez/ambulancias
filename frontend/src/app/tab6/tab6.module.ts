import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import {Camera} from '@ionic-native/camera/ngx';
import {NetworkInterface} from '@ionic-native/network-interface/ngx';
import { Tab6Page } from './tab6.page';

const routes: Routes = [
  {
    path: '',
    component: Tab6Page
  }
];

const searchbar = document.querySelector('ion-searchbar');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RouterModule.forChild([{ path: '', component: Tab6Page }])
  ],
  providers: [
    NetworkInterface,
    Camera,
  ],
  declarations: [Tab6Page]
})
export class Tab6PageModule {}

