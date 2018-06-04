import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AddTaskPage } from '../add-task/add-task';
import { TaskDetailPage } from '../task-detail/task-detail';
import { AddTrailerPage } from '../add-trailer/add-trailer';
import { TrailerDetailPage } from '../trailer-detail/trailer-detail';
import { VideoPlayPage } from '../video-play/video-play';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskType: any;

  tasksDoing: Array<GoBoardTask>;
  tasksToDo: Array<GoBoardTask>;
  tasksWaiting: Array<GoBoardTask>;

  addTaskPage: any =  AddTaskPage;
  addTrailerPage: any = AddTrailerPage;
  taskDetailPage: any = TaskDetailPage;
  trailerDetailPage: any = TrailerDetailPage;
  videoPlayPage: any = VideoPlayPage;

  backImg: any = 'https://i.loli.net/2018/05/15/5afaa332ac95d.png';

  videoUrl: Array<String>;

  constructor(
    public navCtrl: NavController, 
    private statusBar: StatusBar,
    private streamingMedia: StreamingMedia
  ) {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#F97C7C');
    this.init()
    this.taskType = 'doing';
    
    this.videoUrl = [
      'https://cdn-b-east.streamable.com/video/mp4/d2spc.mp4?token=jbTdXIfjy4dMk4_7Oy2Jkg&expires=1526536090',
      'https://cdn-b-east.streamable.com/video/mp4/bo6om.mp4?token=llXbm1ICtBU2OlvmG_n_uQ&expires=1526537410',
      'https://cdn-b-east.streamable.com/video/mp4/nb180.mp4?token=bBBOvYXo8jpAjjR-MmRjBg&expires=1526536127',
      'https://cdn-b-east.streamable.com/video/mp4/dgdhp.mp4?token=r-T-sogh7Cg2aVhQ2ES9SQ&expires=1526533125'
    ]
  }

  init() {
    this.tasksDoing = [
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "易困", title: "篮球篮球"},
        taskName: "直播Lightroom入门教学",
        taskDescription: "求介绍！",
        taskLikeNum: 15,
        taskMoneyNum: 21,
        taskStartTime: '20180517T14:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '清华大学',
        taskReward: '20',
        taskOrder:0,
        taskLeftTime: {
          secondsRemaining: 20459,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaff747c479.jpg',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345342", name: "Will", title: "英国生活"},
        taskName: "英国留学生活",
        taskDescription: "申请中，想看看学校都是什么样子！",
        taskLikeNum: 34,
        taskMoneyNum: 45,
        taskStartTime: '20180517T18:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '英国',
        taskReward: '30',
        taskOrder:1,
        taskLeftTime: {
          secondsRemaining: 20459,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afb03906e06b.jpg',
        showAvatar: this.getAvatar()            
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345342", name: "白菜笑笑", title: "."},
        taskName: "Minecraft直播",
        taskDescription: "求直播！",
        taskLikeNum: 12,
        taskMoneyNum: 23,
        taskStartTime: '20180518T19:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '任意',
        taskReward: '20',
        taskOrder:2,
        taskLeftTime: {
          secondsRemaining: 20459,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afb03925114f.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "直播画画",
        taskDescription: "求直播画图教学！",
        taskLikeNum: 21,
        taskMoneyNum: 12,
        taskStartTime: '20180517T18:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '英国',
        taskReward: '10',
        taskOrder:3,
        taskLeftTime: {
          secondsRemaining: 20459,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afb03937f77a.png',
        showAvatar: this.getAvatar()            
      }
    ];
    this.tasksWaiting = [
      {
        taskInitiator: {id: "2014345765", name: "易困", title: "篮球篮球"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "小姐姐可以介绍一下自己的化妆台吗",
        taskDescription: "求介绍大家平时化妆的步骤巴拉巴拉的qwq",
        taskLikeNum: 23,
        taskMoneyNum: 40,
        taskStartTime: '20180518T00:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '清华大学',
        taskReward: '18',
        taskOrder:0,
        taskLeftTime: {
          secondsRemaining: 3333,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()           
      },
      {
        taskInitiator: {id: "2014000234", name: "轻轻", title: "遇见春天"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "请教一下简单的PS技能",
        taskDescription: "请教我简单的PS入门，比如调色等",
        taskLikeNum: 5,
        taskMoneyNum: 21,
        taskStartTime: '20180519T21:00',
        taskEndTime: '20180531T23:00',
        taskPosition: '北京市',
        taskReward: '10',
        taskOrder:1,
        taskLeftTime: {
          secondsRemaining: 19876,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2014000234", name: "July", title: "遇见春天"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "看看香港的校园",
        taskDescription: "看看香港的校园",
        taskLikeNum: 2,
        taskMoneyNum: 5,
        taskStartTime: '20180523T00:00',
        taskEndTime: '20180609T24:00',
        taskPosition: '香港大学',
        taskReward: '5',
        taskOrder:2,
        taskLeftTime: {
          secondsRemaining: 8878,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: true,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()           
      },
      {
        taskInitiator: {id: "2014000234", name: "灰仔", title: "有更大的世界"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "直播桃李煎饼制作",
        taskDescription: "晚上想看直播桃李煎饼制作",
        taskLikeNum: 6,
        taskMoneyNum: 8,
        taskStartTime: '20180523T00:00',
        taskEndTime: '20180609T24:00',
        taskPosition: '清华大学桃李园',
        taskReward: '8',
        taskOrder:3,
        taskLeftTime: {
          secondsRemaining: 23153,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()           
      },
      {
        taskInitiator: {id: "2013000111", name: "朱丽叶", title: "影迷"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "想看清华最高的建筑窗外的夕阳",
        taskDescription: "想看清华最高的建筑窗外的夕阳",
        taskLikeNum: 4,
        taskMoneyNum: 12,
        taskStartTime: '20180518T00:00',
        taskEndTime: '20180601T24:00',
        taskPosition: '清华大学',
        taskReward: '8',
        taskOrder:4,
        taskLeftTime: {
          secondsRemaining: 1789,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: true,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013003456", name: "陈翔", title: "吃货一枚"},
        taskRecipient: {id: "2014345342", name: "阿花姑娘", title: "来跟我走"},
        taskName: "直播打《诛仙》手游",
        taskDescription: "直播打《诛仙》手游，介绍一下基本玩法并评价好不好玩。或者小白从头开始摸索也行～",
        taskLikeNum: 3,
        taskMoneyNum: 10,
        taskStartTime: '20180525T00:00',
        taskEndTime: '20180601T24:00',
        taskPosition: '清华大学',
        taskReward: '10',
        taskOrder:5,
        taskLeftTime: {
          secondsRemaining: 10000,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()     
      }
    ];
    this.tasksToDo = [
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "易困", title: "篮球篮球"},              
        taskName: "想看大家学习的样子",                
        taskDescription: "在实验室或者图书馆等等都可以",
        taskLikeNum: 22,
        taskMoneyNum: 12,
        taskStartTime: '20180519T20:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '清华大学李文正图书馆',
        taskLeftTime: {
          secondsRemaining: 10000,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '10',
        taskOrder:0,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: false,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa332ac95d.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "201345676", name: "小白仔", title: "易燃易爆炸"},
        taskName: "安利动画漫画电影电视剧",
        taskDescription: "有什么安利尽管来直播吧，可以直接直播美容，比较喜欢剧情向或者搞笑类",
        taskLikeNum: 12,
        taskMoneyNum: 8,
        taskStartTime: '20180517T17:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '清华大学',
        taskLeftTime: {
          secondsRemaining: 12345,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '5',
        taskOrder: 1,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa7ac42f99.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "朱雨炫", title: "FIT常驻用户"},
        taskName: "直播学习编程语言",
        taskDescription: "想看大佬直播学习编程语言…一直都不会啊qwq谢谢",
        taskLikeNum: 18,
        taskMoneyNum: 14,
        taskStartTime: '20180519T21:00',
        taskEndTime: '20180631T24:00',
        taskPosition: '清华大学FIT楼',
        taskLeftTime: {
          secondsRemaining: 23415,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '10',
        taskOrder:2,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: true,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa7bc12e98.png',
        showAvatar: this.getAvatar()          
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "小飞", title: "不打游戏很多年"},
        taskName: "看大佬玩qq飞车",
        taskDescription: "Qq飞车手游48人淘汰赛模式",
        taskLikeNum: 15,
        taskMoneyNum: 22,
        taskStartTime: '20180518T14:00',
        taskEndTime: '20180602T24:00',
        taskPosition: '清华大学紫荆公寓',
        taskLeftTime: {
          secondsRemaining: 5512,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '8',
        taskOrder: 3,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa7bf8178a.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "子弹头", title: "飞一会儿"},
        taskName: "想听懂得同学介绍一下switch",
        taskDescription: "有没有大佬可以直播下玩NS的，任意游戏都行",
        taskLikeNum: 24,
        taskMoneyNum: 13,
        taskStartTime: '20180517T12:00',
        taskEndTime: '20180602T24:00',
        taskPosition: '清华大学紫荆公寓8号楼',
        taskLeftTime: {
          secondsRemaining: 20459,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '10',
        taskOrder: 4,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa7bf82383.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "烟灰缸", title: "see you tomorrow"},
        taskName: "荷塘月色",
        taskDescription: "荷塘月色走一走",
        taskLikeNum: 8,
        taskMoneyNum: 6,
        taskStartTime: '20180519T20:00',
        taskEndTime: '20180602T24:00',
        taskPosition: '荷塘月色',
        taskLeftTime: {
          secondsRemaining: 15642,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '3',
        taskOrder: 5,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa7c2c21aa.png',
        showAvatar: this.getAvatar()     
      },
      {
        taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
        taskRecipient: {id: "2014345765", name: "贪玩蓝月", title: "渣渣"},
        taskName: "求大神直播画画",
        taskDescription: "有没有美院的同学，想看最最简单的简笔画",
        taskLikeNum: 13,
        taskMoneyNum: 17,
        taskStartTime: '20180518T22:00',
        taskEndTime: '20180602T24:00',
        taskPosition: '清华大学美术学院',
        taskLeftTime: {
          secondsRemaining: 34211,
          runTimer: true,
          hasStarted: true,
          hasFinished: false,
          displayTime: "12:13:55",
        },
        taskReward: '6',
        taskOrder: 6,
        taskSelfInit: false,
        taskSelfClaim: false,
        trailerClaim: true,
        hasFavor: false,
        taskBackImg: 'https://i.loli.net/2018/05/15/5afaa7c335966.png',
        showAvatar: this.getAvatar()      
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

  searchByWaiting(a){
    console.log(this.tasksWaiting);
    // this.tasksWaiting = [
    //   {
    //     taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
    //     taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
    //     taskName: "想看医学院窗外的夕阳",
    //     taskDescription: "想看医学院窗外的夕阳",
    //     taskLeftTime: {
    //       secondsRemaining: 10000,
    //       runTimer: true,
    //       hasStarted: true,
    //       hasFinished: false,
    //       displayTime: "06:11:11",
    //     },
    //     taskOrder: 0,
    //     taskLikeNum: 20,
    //     taskMoneyNum: 100,
    //     taskSelfInit: false,
    //     taskSelfClaim: false,
    //     trailerClaim: false,
    //     hasFavor: false,
    //     taskStartTime: '20180510T23:12',
    //     taskEndTime: '20180511T23:12',
    //     taskPosition: '医学院',
    //     taskReward: '10'
    //   },
    //   {
    //     taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
    //     taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
    //     taskName: "真的十分想看医学院窗外的夕阳",
    //     taskDescription: "想看医学院窗外的夕阳",
    //     taskLeftTime: {
    //       secondsRemaining: 22359,
    //       runTimer: true,
    //       hasStarted: true,
    //       hasFinished: false,
    //       displayTime: "06:11:11",
    //     },
    //     taskOrder: 1,
    //     taskLikeNum: 20,
    //     taskMoneyNum: 100,
    //     taskSelfInit: true,
    //     taskSelfClaim: false,
    //     trailerClaim: false,
    //     hasFavor: true,
    //     taskStartTime: '20180510T23:12',
    //     taskEndTime: '20180511T23:12',
    //     taskPosition: '医学院',
    //     taskReward: '10'
    //   },
    //   {
    //     taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
    //     taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
    //     taskName: "想看医学院窗外的夕阳",
    //     taskDescription: "想看医学院窗外的夕阳",
    //     taskLeftTime: {
    //       secondsRemaining: 10000,
    //       runTimer: true,
    //       hasStarted: true,
    //       hasFinished: false,
    //       displayTime: "06:11:11",
    //     },
    //     taskOrder: 2,
    //     taskLikeNum: 20,
    //     taskMoneyNum: 100,
    //     taskSelfInit: false,
    //     taskSelfClaim: false,
    //     trailerClaim: false,
    //     hasFavor: false,
    //     taskStartTime: '20180510T23:12',
    //     taskEndTime: '20180511T23:12',
    //     taskPosition: '医学院',
    //     taskReward: '10'
    //   },
    //   {
    //     taskInitiator: {id: "2013000111", name: "张三", title: "篮球爱好者"},
    //     taskRecipient: {id: "2017123456", name: "李四", title: "医学工作者"},
    //     taskName: "想看医学院窗外的夕阳",
    //     taskDescription: "想看医学院窗外的夕阳",
    //     taskLeftTime: {
    //       secondsRemaining: 10000,
    //       runTimer: true,
    //       hasStarted: true,
    //       hasFinished: false,
    //       displayTime: "06:11:11",
    //     },
    //     taskOrder: 3,
    //     taskLikeNum: 20,
    //     taskMoneyNum: 100,
    //     taskSelfInit: false,
    //     taskSelfClaim: false,
    //     trailerClaim: true,
    //     hasFavor: false,
    //     taskStartTime: '20180510T23:12',
    //     taskEndTime: '20180511T23:12',
    //     taskPosition: '医学院',
    //     taskReward: '10'
    //   }
    // ];
  }

  searchByToDo(a){
    console.log(this.tasksToDo);
  }

  searchByDoing(a){
  }

  addTask(){
    this.addTaskPage = AddTaskPage;
    this.navCtrl.push(this.addTaskPage, {'task_recipient': {'id': ''}});
  }

  addTrailer(){
    this.addTrailerPage = AddTrailerPage;
    this.navCtrl.push(this.addTrailerPage, {'task_recipient': {'id': ''}});
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
  
  getAvatar(){
    var path = 'assets/imgs/' + Math.floor(Math.random() * 17).toString() + '.jpg'
    console.log(path);
    return path;
  }

  async playVideo(taskOrder){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };
    var video = this.videoUrl[taskOrder];
    this.streamingMedia.playVideo(video.toString(), options);
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
  taskBackImg: string;
  showAvatar: string;
}
