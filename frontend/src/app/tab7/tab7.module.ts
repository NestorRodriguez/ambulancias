import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';

import { Tab7Page } from './tab7.page';

const routes: Routes = [
  {
    path: '',
    component: Tab7Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RouterModule.forChild([{ path: '', component: Tab7Page }])
  ],
  declarations: [Tab7Page]
})
export class Tab7PageModule {}


