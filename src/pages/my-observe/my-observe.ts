import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyObservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-observe',
  templateUrl: 'my-observe.html',
})
export class MyObservePage {
  tasks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [1,1,1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyObservePage');
  }

}
