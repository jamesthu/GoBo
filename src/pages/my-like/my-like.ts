import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyLikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-like',
  templateUrl: 'my-like.html',
})
export class MyLikePage {

  tasks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [1,1,1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLikePage');
  }

}
