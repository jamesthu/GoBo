import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { TaskDetailPage } from '../task-detail/task-detail';
import { TrailerDetailPage } from '../trailer-detail/trailer-detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  taskType: any;
  taskSubType: any;

  tasksDoing: Array<GoBoardTask>;
  tasksToDo: Array<GoBoardTask>;
  tasksWaiting: Array<GoBoardTask>;
  tasksClaim: Array<GoBoardTask>;

  addTaskPage: any =  AddTaskPage;
  taskDetailPage: any = TaskDetailPage;
  trailerDetailPage: any = TrailerDetailPage;

  constructor(public navCtrl: NavController) {
    this.taskType = "waiting";
    this.taskSubType = "claim";
    this.init();
  }

  init() {
    this.tasksDoing = [
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
        taskName: "想看医学院窗外的夕阳",
        taskDescription: "想看医学院窗外的夕阳",
        taskLeftTime: {
          secondsRemaining: 10000,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "06:11:11",
        },
        taskOrder: 0,
        taskLikeNum: 20,
        taskMoneyNum: 100,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: false,
        taskStartTime: '20180510T23:12',
        taskEndTime: '20180511T23:12',
        taskPosition: '医学院',
        taskReward: '10'
      }
    ];
    this.tasksWaiting = [
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
        taskName: "想看医学院窗外的夕阳",
        taskDescription: "想看医学院窗外的夕阳",
        taskLeftTime: {
          secondsRemaining: 10000,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "06:11:11",
        },
        taskOrder: 0,
        taskLikeNum: 20,
        taskMoneyNum: 100,
        taskSelfInit: true,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: false,
        taskStartTime: '20180510T23:12',
        taskEndTime: '20180511T23:12',
        taskPosition: '医学院',
        taskReward: '10'
      }
    ];
    this.tasksToDo = [
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
        taskName: "想看医学院窗外的夕阳",
        taskDescription: "想看医学院窗外的夕阳",
        taskLeftTime: {
          secondsRemaining: 22359,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "06:11:11",
        },
        taskOrder: 0,
        taskLikeNum: 20,
        taskMoneyNum: 100,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: false,
        taskStartTime: '20180510T23:12',
        taskEndTime: '20180511T23:12',
        taskPosition: '医学院',
        taskReward: '10'
      }
    ];
    for(var i = 0; i < this.tasksDoing.length; i++){
      if(this.tasksDoing[i].taskLeftTime.secondsRemaining > 0 ){
        this.tasksDoing[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(this.tasksDoing[i].taskLeftTime.secondsRemaining);
        this.timerTick(this.tasksDoing[i]);
      }
      else{
        this.tasksDoing[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(0);
      }
    }
    for(i = 0; i < this.tasksToDo.length; i++){
      if(this.tasksToDo[i].taskLeftTime.secondsRemaining > 0 ){
        this.tasksToDo[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(this.tasksToDo[i].taskLeftTime.secondsRemaining);
        this.timerTick(this.tasksToDo[i]);
      }
      else{
        this.tasksToDo[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(0);
      }
    }
    for(i = 0; i < this.tasksWaiting.length; i++){
      if(this.tasksWaiting[i].taskLeftTime.secondsRemaining > 0 ){
        this.tasksWaiting[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(this.tasksWaiting[i].taskLeftTime.secondsRemaining);
        this.timerTick(this.tasksWaiting[i]);
      }
      else{
        this.tasksWaiting[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(0);
      }
    }
    this.tasksClaim = [
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
        taskName: "清华大礼堂直播",
        taskDescription: "直播大礼堂演唱会",
        taskLeftTime: {
          secondsRemaining: 22359,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "06:11:11",
        },
        taskOrder: 0,
        taskLikeNum: 20,
        taskMoneyNum: 100,
        taskSelfInit: false,
        taskSelfClaim: true,
        trailerClaim: false,
        hasFavor: false,
        taskStartTime: '20180510T23:12',
        taskEndTime: '20180511T23:12',
        taskPosition: '医学院',
        taskReward: '10'
      }
    ];
    for(i = 0; i < this.tasksClaim.length; i++){
      if(this.tasksClaim[i].taskLeftTime.secondsRemaining > 0 ){
        this.tasksClaim[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(this.tasksClaim[i].taskLeftTime.secondsRemaining);
        this.timerTick(this.tasksClaim[i]);
      }
      else{
        this.tasksClaim[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(0);
      }
    }
  }

  timerTick(task: GoBoardTask) {
    setTimeout(() => {
      if (!task.taskLeftTime.runTimer) { return; }
      task.taskLeftTime.secondsRemaining--;
      task.taskLeftTime.displayTime = this.getSecondsAsDigitalClock(task.taskLeftTime.secondsRemaining);
      if (task.taskLeftTime.secondsRemaining > 0) {
        this.timerTick(task);
      }
      else {
        task.taskLeftTime.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  addTask(){
    this.addTaskPage = AddTaskPage;
    this.navCtrl.push(this.addTaskPage, {'task_recipient': {'id': ''}});
  }

  searchByClaim() {

  }

  searchBySubmit() {

  }

  searchByWaiting() {

  }

  searchByDoing() {

  }

  searchByTodo() {

  }

  tip(taskOrder, taskType) {
    if(taskType == "doing") {
      this.tasksDoing[taskOrder].taskMoneyNum += 1;
    }
    else if(taskType == "waiting") {
      this.tasksWaiting[taskOrder].taskMoneyNum += 1;
    }
    else {
      this.tasksToDo[taskOrder].taskMoneyNum += 1;
    }
  }

  favor(taskOrder, taskType) {
    if(taskType == "doing") {
      if(!this.tasksDoing[taskOrder].hasFavor) {
        this.tasksDoing[taskOrder].hasFavor = true;
        this.tasksDoing[taskOrder].taskLikeNum += 1;
      }
    }
    else if(taskType == "waiting") {
      if(!this.tasksWaiting[taskOrder].hasFavor) {
        this.tasksWaiting[taskOrder].hasFavor = true;
        this.tasksWaiting[taskOrder].taskLikeNum += 1;
      }
    }
    else {
      if(!this.tasksToDo[taskOrder].hasFavor) {
        this.tasksToDo[taskOrder].hasFavor = true;
        this.tasksToDo[taskOrder].taskLikeNum += 1;
      }
    }
  }

  detailTask(taskOrder){
    this.navCtrl.push(this.taskDetailPage, {'tag': 'home', 'task': this.tasksWaiting[taskOrder]});
  }

  detailTrailer(taskOrder){
    this.navCtrl.push(this.trailerDetailPage, {'tag': 'home', 'task': this.tasksToDo[taskOrder]});
  }

}

export interface ITimer {
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

export interface GoBoardTask {
  taskInitiator: {id: string, name: string, title: string};
  taskRecipient: {id: string, name: string, title: string}; 
  taskName: string;
  taskDescription: string;
  taskLeftTime: ITimer;
  taskOrder: number;
  taskLikeNum: number;
  taskMoneyNum: number;
  taskSelfInit: boolean;
  taskSelfClaim: boolean;
  trailerClaim: boolean;
  hasFavor: boolean;
  taskPosition: string;
  taskStartTime: string;
  taskEndTime: string;
  taskReward: string;
}
