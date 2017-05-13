import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraCordovaService } from "../../services/camera-service-cordova";

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera-page',
  templateUrl: 'camera-page.html',
})
export class CameraPage {
  public imagepath: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cameraService: CameraCordovaService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  choosePicture(){
    this.cameraService.choosePicture().then(imagePath=>{
      console.log(imagePath);
      this.imagepath = "data:image/jpeg;base64," + imagePath;
    })
    .catch(err=>{
      console.log(err);
    })
  }

}
