import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public map: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad()
  {
    this.loadMap();
  }

  loadMap()
  {
    this.map = new AMap.Map("container", {
      resizeEnable: true,
      center: [116.33, 40.005],
      zoom: 16
    });
  }


}
