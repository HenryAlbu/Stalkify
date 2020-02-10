import {  Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



// Modals
import { ImagePage } from './../modal/image/image.page';

const STORAGE_KEY = 'my_images';


@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  
  images = [];
  username: string;
  userPhoto: string;
  fullName: string;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    public toastCtrl : ToastController,
    private storage: Storage

  ) {

  }

  takePicture(){
    this.router.navigate(['/approve-photo']);
  }

  // Just to display username on login
  ionViewWillEnter() {    
    this.storage.get('session_storage').then((res)=>{      
      this.username = res.username;
    })
    this.storage.get('selected_user').then((res)=>{      
      this.userPhoto = "http://spontadeal.com/stalkify/upload/uploads/" + res.userPhoto;
      this.fullName = res.fullName;
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
