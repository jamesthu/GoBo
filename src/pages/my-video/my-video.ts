import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-video',
  templateUrl: 'my-video.html',
})
export class MyVideoPage {

  tasks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [1,1,1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyVideoPage');
  }

}
