import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import { Tab9Page } from './tab9.page';

const routes: Routes = [
  {
    path: '',
    component: Tab9Page
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RouterModule.forChild([{ path: '', component: Tab9Page }])
  ],
  declarations: [Tab9Page]
})
export class Tab9PageModule {}

