import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

/**
 * Generated class for the BroadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-broad',
  templateUrl: 'broad.html',
})
export class BroadPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public camera: Camera,
    private mediaCapture: MediaCapture) {
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   mediaType: this.camera.MediaType.VIDEO
    // }
    
    // this.camera.getPicture(options).then((videoData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64:
    // }, (err) => {
    //  // Handle error
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BroadPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter BroadPage');
    this.mediaCapture.captureVideo()
    .then((videoData) => {
      this.navCtrl.parent.select(0);
    }, (err) => {
      this.navCtrl.parent.select(0);
    });;
  }

}
