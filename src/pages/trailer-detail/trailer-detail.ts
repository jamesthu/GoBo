import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TrailerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trailer-detail',
  templateUrl: 'trailer-detail.html',
})
export class TrailerDetailPage {

  public tag: any = 'home';
  public task: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.tag = this.navParams.get('tag');
    this.task = this.navParams.get('task');
    
    if(this.tag == 'add'){
      this.navCtrl.remove(1);
      this.task['taskInitiator'] = {id: "2013000111", name: "张三", title: "篮球爱好者"};
      this.task['taskRecipient'] = {id: "2017123456", name: "李四", title: "医学工作者"};
      this.task['taskLeftTime'] = {
        secondsRemaining: 10000,
        runTimer: true,
        hasStarted: true,
        hasFinished: false,
        displayTime: "06:11:11"
      };
      this.task['taskSelfInit'] = false;
      this.task['taskSelfClaim'] = true;
      this.task['trailerClaim'] = false;
      this.task['hasFavor'] = false;
      let alert = alertCtrl.create({
        title: "发布成功"
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerDetailPage');
  }

  deleteTrailer(){
    this.task.taskSelfClaim = true;
    let alert = this.alertCtrl.create({
      title: "真的要删除吗？",
      message: "预告删除后不可恢复，是否确认删除？",
      buttons: [
        {
          text:'删除',
          handler: ()=> {
            this.navCtrl.pop();
          }
        },
        {
          text:'再想想',
          handler: ()=> {
          }
        }
      ]
    });
    alert.present();
  }

  claimTrailer(){
    this.task.trailerClaim = true;
    let alert = this.alertCtrl.create({
      title: "成功开播提醒！"
    });
    alert.present();
  }

  cancelTrailer(){
    this.task.trailerClaim = false;
    let alert = this.alertCtrl.create({
      title: "成功取消提醒！"
    });
    alert.present();
  }

}
