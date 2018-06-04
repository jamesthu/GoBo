import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  email: string = '';
  content: string = '';
  error: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  submitReport() {
    if(this.email == "" || this.content == ""){
      this.error = true;
    }
    else{
      console.log([this.email, this.content]);
      this.error = false;
      let alert = this.alertCtrl.create({
        title: '提交成功',
        subTitle: '感谢您的举报和反馈，我们会高度重视！',
        buttons: [
          {
            text: '确认',
            handler: ()=>{
              this.navCtrl.pop();
            }
          }
        ],
        enableBackdropDismiss: false
      });
      alert.present();
    }
  }

}
