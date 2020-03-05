import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActionSheetController, ModalController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';



@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public scores:String[] = []  

  constructor(
    public toastCtrl: ToastController,
    private postPvdr: PostProvider,
  ) { }

  ngOnInit() {
    this.getLeaders();
  }

  async getLeaders() {

    let body = {
      aksi: 'fetchLeaderboard'
    };


    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {

      console.log(data);



      for(var i = 0; i < data['names'].length; i++){
        this.scores.push(data['names'][i] + "\n " + data['points'][i]);
      }  

    });

  }
}
