import { Component } from '@angular/core';
import {  ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

// Modals
import { ImagePage } from './../modal/image/image.page';


@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';

  username: string;
  anggota:any;
  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    public toastCtrl : ToastController,
    private storage: Storage
  ) {

  }

  // Just to display username on login
  ionViewWillEnter() {
    
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.username = this.anggota.username;
    })
  }

  // Log out on click
  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message: 'Logout successful',
      duration: 2000
    });
    toast.present();
  }

  // Shows popup of main image
  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  

}
