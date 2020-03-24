import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';




@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public username: string;
  public oldusername: string;
  public fullname: string;
  public photoName: string;
  public photoLoc: string;
  public password: string;
  public confirm_password: string;


  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public postPvdr: PostProvider,
    public storage: Storage,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getProfile()
  }

  async updateUserInfo() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    if (this.username == "" || this.fullname == "") {
      const toast = await this.toastCtrl.create({
        message: "Please fill out all fields",
        duration: 2000
      });
      toast.present();
    } else {

      this.storage.get('session_storage').then((res) => {
        if (res != null) {


          this.oldusername = res.username;
          console.log("username", res.username);

          //form of data to update at API
          let body = {
            username: this.username,
            oldusername: this.oldusername,
            fullName: this.fullname,
            aksi: 'updateUserInfo'
          };

          console.log("body", body);


          //puts updated profile data
          this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {

            //makes to that the update is successful
            //if not do not update local storage
            if (data.success) {


              //if above application of data is successful, update local storage
              //get old first and apply to new with changes applied from the form
              this.storage.get('session_storage').then((res) => {
                if (res != null) {


                  //new data to put in local storage
                  let newlocaldata = {
                    username: this.username,
                    password: res.password,
                    points: res.points,
                    userId: res.userId,
                    selectedUserId: res.selectedUserId
                  };

                  console.log("local update", newlocaldata);

                  //put updated data to local storage
                  this.storage.set('session_storage', newlocaldata);
                  this.router.navigate(['tabs/profile']);

                  //this.toast.show(`Update Successful`, '5000', 'center');

                } else {
                  //this.toast.show(`Update Failed`, '5000', 'center');
                }
              });
            } else {
              //this.toast.show(`Update Failed`, '5000', 'center');
            }
          });
        } else {
          //this.toast.show(`Update Failed`, '5000', 'center');
        }
      });
    }
  }

  async updatePassword() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });


    if (this.password == "" || this.confirm_password == "") {
      const toast = this.toastCtrl.create({
        message: "Please fill out all fields",
        duration: 2000
      });
      (await toast).present;
    } else if (this.confirm_password != this.password) {
      const toast = await this.toastCtrl.create({
        message: "Password does not match",
        duration: 2000
      });
      toast.present();
    } else {
      this.storage.get('session_storage').then((res) => {
        if (res != null) {

          let body = {
            username: res.username,
            password: this.password,
            aksi: 'updatePassword'
          };

          this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {

            //makes to that the update is successful
            //if not do not update local storage
            if (data.success) {


              //if above application of data is successful, update local storage
              //get old first and apply to new with changes applied from the form
              this.storage.get('session_storage').then((res) => {
                if (res != null) {

                  //new data to put in local storage
                  let newlocaldata = {
                    username: res.username,
                    password: this.password,
                    points: res.points,
                    userId: res.userId,
                    selectedUserId: res.selectedUserId
                  };

                  //this.toast.show(`Update Successful`, '5000', 'center');

                  //put updated data to local storage
                  this.storage.set('session_storage', newlocaldata);
                  this.router.navigate(['tabs/profile']);

                } else {
                  //this.toast.show(`Update Failed`, '5000', 'center');
                }
              });
            } else {
              //this.toast.show(`Update Failed`, '5000', 'center');
            }
          });
        } else {
          //this.toast.show(`Update Failed`, '5000', 'center');
        }
      });
    }
  }




  async getProfile() {
    this.storage.get('session_storage').then((res) => {
      if (res != null) {

        let body = {
          aksi: 'fetchProfile',
          username: res.username
        };

        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {

          this.username = data[0].username;
          this.fullname = data[0].fullName;
        });
      }
    });
  }

  
  async presentToast(message) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = 2000;

    document.body.appendChild(toast);
    return toast.present();
  }
}
