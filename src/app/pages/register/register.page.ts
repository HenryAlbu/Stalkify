import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  username: string = "";
  password: string = "";
  confirm_password: string = "";

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl : ToastController
  ) { }

  ngOnInit() {
  }

  // // //
  formLogin() {
    this.router.navigate(['/login']);
  }

  // Makes sure all feilds are filled in register form
  // If form is ok, send data to api
  async prosesRegister(){
    if(this.username==""){
      const toast = await this.toastCtrl.create({
        message: "Username is required",
        duration: 2000
      });
      toast.present();
    }else if (this.password ==""){
      const toast = await this.toastCtrl.create({
        message: "Password is required",
        duration: 2000
      });
      toast.present();
    }else if (this.confirm_password != this.password){
      const toast = await this.toastCtrl.create({
        message: "Password does not match",
        duration: 2000
      });
      toast.present();
    }else{
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'register'
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertmsg = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register successful',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }
  }

}
