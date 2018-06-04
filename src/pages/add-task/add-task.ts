import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TaskDetailPage } from '../task-detail/task-detail';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  public task: {
    token: any,
    taskRecipient: string,
    taskName: string,
    taskDescription: string,
    taskPosition: string,
    taskStartTime: string,
    taskEndTime: string,
    taskReward: string,
    taskLatitude: any,
    taskLongitude: any
  }

  minStartTime: string = "2017-01-01T00:00:00Z";
  minEndTime: string = "2017-01-01T23:59:00Z";

  taskDetailPage: any = TaskDetailPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    var date = new Date();
      // date.setDate(new Date().getDate());
    var startTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate()) + 'T' + this.prefix(2, date.getHours()) +':' + this.prefix(2, date.getMinutes());
    date.setDate(new Date().getDate() + 1);
    var endTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate()) + 'T' + this.prefix(2, date.getHours()) +':' + this.prefix(2, date.getMinutes());
    var task_recipient = this.navParams.get('task_recipient');
    this.task = {
      token: '',
      taskRecipient: task_recipient,
      taskName: '',
      taskDescription: '',
      taskPosition: '',
      taskLatitude: 0,
      taskLongitude: 0,
      taskStartTime: startTime,
      taskEndTime: endTime,
      taskReward: '1'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  prefix(num, val) {
    return (new Array(num).join('0') + val).slice(-num);
  }

  updateEndTime() {
    var date = new Date(this.task.taskStartTime);
    date.setTime(date.getTime() + 1000 * 60 *30);
    this.minEndTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate()) + 'T' + this.prefix(2, date.getHours()) +':' + this.prefix(2, date.getMinutes());
    this.task.taskEndTime = this.minEndTime;
  }

  addTask() {
    if(this.task.taskName == "") {
      let alert = this.alertCtrl.create({
        title: '发布失败',
        subTitle: '请填写完整任务名称',
        buttons: [
          {
            text: '确认',
            handler: ()=>{
            }
          }
        ],
        enableBackdropDismiss: false
      });
      alert.present();
    }
    else {
      var subTitle = "任务名称：" + this.task.taskName;
      if(this.task.taskPosition != '') {
        subTitle += "<br/>" + "任务地点：" + this.task.taskPosition;
      }
      subTitle += "<br/>" + "任务时间：" + this.task.taskStartTime;
      if(this.task.taskReward != '') {
        subTitle += "<br/>" + "任务金额：" + this.task.taskReward;
      }
      let alert = this.alertCtrl.create({
        message: subTitle,
        buttons: [
          {
            text: '返回修改',
            handler: () => {
            }
          },
          {
            text: '确认发布',
            handler: () => {
              this.navCtrl.push(this.taskDetailPage, {'tag': 'add', 'task': this.task});
            }
          }
        ]
      });
      alert.present();
    }
  }

}
