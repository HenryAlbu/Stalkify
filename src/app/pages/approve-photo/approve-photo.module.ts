import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApprovePhotoPage } from './approve-photo.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovePhotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApprovePhotoPage]
})
export class ApprovePhotoPageModule {}
