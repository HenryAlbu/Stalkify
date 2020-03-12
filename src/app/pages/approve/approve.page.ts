import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage implements OnInit {

  approveDatas: any = [];
  limit: number = 3;
  start: number = 0;
  constructor(
    private router: Router,
  	private postPvdr: PostProvider,   
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadApproveData();
  }


  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadApproveData().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  removePost(post){
    let index = this.approveDatas.indexOf(post);

    if(index > -1){
      this.approveDatas.splice(index, 1);
    }
}
  

  
  loadApproveData(){
  	return new Promise(resolve => {
  		let body = {
        aksi : 'getdata',
        limit : this.limit,
  			start : this.start,  			
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let approveData of data.result){
  				this.approveDatas.push(approveData);
  			}
  			resolve(true);
  		});
  	});
  }

  async prosesApproval(post, spottedPhoto, userId, type){
    
    let body = {
      spottedPhoto: spottedPhoto,
      type: type,
      userId: userId,
      aksi: 'approvePhoto'
    };
    
    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
      var alertmsg = data.msg;
      if(data.success){               
        
      }else{
        const toast = await this.toastCtrl.create({
          message: alertmsg,
          duration: 2000
        });
        toast.present();
      }    
    });   

    this.removePost(post)
  }

  

}
