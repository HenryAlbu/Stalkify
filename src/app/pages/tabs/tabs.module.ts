import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }, 
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home-results/home-results.module#HomeResultsPageModule'
      },
      {
        path: 'profile',
        loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule'
      },
      {
        path: 'board',
        loadChildren: '../about/about.module#AboutPageModule'
      },
    ]
  } 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
