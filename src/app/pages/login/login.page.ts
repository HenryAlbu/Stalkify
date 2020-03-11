import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage
  ) { }



  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getSelected();
    this.storage.get('session_storage').then((res) => {
      if (res != null) {
        this.getSession();        
      }
    })
  }

  async getSelected() {
    let body = {
      aksi: 'getSelected'
    };
    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
      this.storage.set('selected_user', data.result);

    });
  }

  async getSession() {

    this.storage.get('session_storage').then((res) => {      
      let body = {
        username: res.username,
        aksi: 'set_session'
      };      
        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
          if (data.success) {
            console.log('SUCK');
            // Create session storage
            this.storage.set('session_storage', data.result);
            this.router.navigate(['/tabs/home']);            
          }
        });
      
    })

  }

  // // //
  formRegister() {
    this.router.navigate(['/register']);
    //this.navCtrl.navigateRoot('/register');
  }

  async prosesLogin() {
    if (this.username != "" && this.password != "") {
      console.log("username" + this.username);
      console.log("Password" + this.password);
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertmsg = data.msg;
        if (data.success) {
          // Create session storage
          this.storage.set('session_storage', data.result);
          this.router.navigate(['/tabs/home']);
          const toast = await this.toastCtrl.create({
            message: 'Login successful',
            duration: 2000
          });
          toast.present();
          this.username = "";
          this.password = "";
          console.log(data);
        } else {
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });

    } else {
      const toast = await this.toastCtrl.create({
        message: 'Username or password invalid',
        duration: 2000
      });
      toast.present();
    }
  }
}

