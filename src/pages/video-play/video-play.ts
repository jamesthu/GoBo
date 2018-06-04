import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the VideoPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-video-play',
  templateUrl: 'video-play.html',
})
export class VideoPlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer, private streamingMedia: StreamingMedia) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayPage');
  }

  async play(){
    // this.videoPlayer.play('https://cdn-b-east.streamable.com/video/mp4/dgdhp.mp4?token=r-T-sogh7Cg2aVhQ2ES9SQ&expires=1526533125').then(() => {
    //   console.log('video completed');
    // }).catch(err => {
    //   console.log(err);
    // });
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };
    
    this.streamingMedia.playVideo('https://cdn-b-east.streamable.com/video/mp4/dgdhp.mp4?token=r-T-sogh7Cg2aVhQ2ES9SQ&expires=1526533125', options);
  }

}
