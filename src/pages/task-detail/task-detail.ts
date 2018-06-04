import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AddTrailerPage } from '../add-trailer/add-trailer';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {
  public tag: any = 'home';
  public task: any;

  addTrailerPage: any= AddTrailerPage;

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
      this.task['taskSelfInit'] = true;
      this.task['taskSelfClaim'] = false;
      this.task['hasFavor'] = false;
      let alert = alertCtrl.create({
        title: "发布成功"
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailPage');
  }

  deleteTask(){
    this.task.taskSelfClaim = true;
    let alert = this.alertCtrl.create({
      title: "真的要删除吗？",
      message: "任务删除后不可恢复，是否确认删除？",
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

  claimTask(){
    this.task.taskSelfClaim = true;
    let alert = this.alertCtrl.create({
      title: "领取成功！",
      buttons: [
        {
          text:'发布预告',
          handler: ()=> {
            this.navCtrl.push(this.addTrailerPage);
            this.navCtrl.remove(1);
          }
        }
      ]
    });
    alert.present();
  }
}
