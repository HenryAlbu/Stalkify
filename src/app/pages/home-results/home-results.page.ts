import {  Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PostProvider } from '../../../providers/post-provider';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';




// Modals




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
  points: string;
  userId: string;
  selectedUserId: string;
  ishidden: boolean = false;
  approveDatas: any = [];
  limit: number = 4;
  start: number = 0;
  total = 0;
  value: any;
  
  


  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    public toastCtrl : ToastController,
    private storage: Storage,
    private postPvdr: PostProvider,
    private photoViewer: PhotoViewer  
  ) {

  }
 
  takePicture(){
    this.router.navigate(['/approve-photo']);
  }
  

  ngOnInit() {    
    this.storage.get('session_storage').then((res)=>{      
      this.username = res.username;
      this.points = res.points;
      this.userId = res.userId;
      console.log(res);
      // Hides button if not selected user
      if (res.userId != res.selectedUserId){
        this.ishidden = true;
      }      
    })  
  }

  loadData(event:any){ 
  	this.start += this.limit;
  	setTimeout(() =>{    
  	this.loadApproveData().then(()=>{      
      event.target.complete();
      if(this.total == 0){
        event.target.disabled = true;
      }      
    });    
    }, 1000);
  }
  
  // Just to display username on login
  ionViewWillEnter() {     
    this.storage.get('approvePage').then((res)=>{      
      this.value = res;  
      console.log(res)     
      if (this.value == 1){        
        this.approveDatas = [];
        this.storage.set('approvePage', 0); 
      }        
    })
    this.loadApproveData();
    this.storage.get('selected_user').then((res)=>{      
      this.userPhoto = "http://spontadeal.com/stalkify/upload/uploads/" + res.userPhoto;
      this.fullName = res.fullName;
      this.selectedUserId = res.userId;     
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
    this.photoViewer.show(image);
  }

  approvePage(){
    this.router.navigate(['tabs/approve']);
  }
  
  // SHOW GALLERY STUFF
  loadApproveData(){    
  	return new Promise(resolve => {
  		let body = {
        aksi : 'getdata-Homepage',
        limit : this.limit,
  			start : this.start,  			
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        this.total = data.total;
        console.log(this.total);        
  			for(let approveData of data.result){          
  				this.approveDatas.push(approveData);
  			}
  			resolve(true);
      });
  	});
  }

 

  zoomPhoto(image,name){
    var options = {
      share: true, // default is false
      closeButton: true, // default is true
      copyToReference: true, // default is false
      headers: '',  // If this is not provided, an exception will be triggered
      piccasoOptions: { } // If this is not provided, an exception will be triggered
     };
    console.log(image)
    this.photoViewer.show("http://www.spontadeal.com/stalkify/upload/uploadsSpotted/" + image, "Taken by: " + name, options);
  }




}
