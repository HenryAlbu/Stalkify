import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { PostProvider } from '../providers/post-provider';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private postPvdr: PostProvider,
    private router: Router

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.getSelected();
      this.splashScreen.hide();
    }).catch(() => {});
    
    this.storage.get('session_storage').then((res)=>{
      if(res != null){
        this.router.navigate(['/tabs/home']);
      }
    }) 
  }

  // GET SELECTED USER
  async getSelected(){    
    let body = {
      aksi: 'getSelected'
    };
    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{  
        this.storage.set('selected_user', data.result);        
    });

}

  
}
