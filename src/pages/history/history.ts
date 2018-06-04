import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { FiterPage } from '../fiter/fiter';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  historyRecords: Array <History>;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    ) {
      this.showAll();
    }

  ionViewDidLoad() {
    console.log('Hello HistoryPage Page');
  }

  fiter(ev) {
    let popover = this.popoverCtrl.create(FiterPage);
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(data => {
        console.log("popover dismissed");
        if(data == null){
          console.log("No item is selected");
        }
        else{
          if(data == 'goldCoin'){
            this.showGoldCoin();
          }
          else{
            if(data == 'points'){
              this.showPoints();
            }
            else{
              if(data == 'income'){
                this.showIncome();
              }
              else{
                this.showPayment();
              }
            }
          }
          console.log("Selected Item is " + data);
        }
    });
  }

  showGoldCoin() {
    console.log('goldCoin');
    var condition = {'pointOrGoldCoin': 'goldCoin'};
    this.getHistory(condition);
  }

  showPoints() {
    console.log('points');
    var condition = {'pointOrGoldCoin': 'point'};
    this.getHistory(condition);
  }

  showIncome() {
    console.log('income');
    // var condition = {'number': {'$gt': 0}};
    var condition = 1;
    this.getHistory(condition);
  }

  showPayment() {
    console.log('payment');
    // var condition = {'number': {'$lt': 0}};
    var condition = -1;
    this.getHistory(condition);
  }

  showAll() {
    console.log('all');
    // var condition = {};
    var condition = 0;
    this.getHistory(condition);
  }

  getHistory(condition){
    if(condition == 0){
      this.historyRecords = [
        {
          modifyNumber: "+10",
          number: 10,
          taskName: "去紫荆四层的麻辣烫窗口买十个包子",
          time: "2017-12-01",
          type: 1
        },
        {
          modifyNumber: "-3",
          number: 3,
          taskName: "求大神讲解线性代数",
          time: "2018-01-01",
          type: -1
        },
        {
          modifyNumber: "+5",
          number: 5,
          taskName: "直播大礼堂的校庆场景",
          time: "2018-04-30",
          type: 1
        },
        {
          modifyNumber: "-4",
          number: 4,
          taskName: "直播教学如何上篮",
          time: "2018-05-01",
          type: 4
        }
      ];
    }
    else if(condition == 1){
      this.historyRecords = [
        {
          modifyNumber: "+10",
          number: 10,
          taskName: "去紫荆四层的麻辣烫窗口买十个包子",
          time: "2017-12-01",
          type: 1
        },
        {
          modifyNumber: "+5",
          number: 5,
          taskName: "直播大礼堂的校庆场景",
          time: "2018-04-30",
          type: 1
        }
      ];
    }
    else {
      this.historyRecords = [
        {
          modifyNumber: "-3",
          number: 3,
          taskName: "求大神讲解线性代数",
          time: "2018-01-01",
          type: -1
        },
        {
          modifyNumber: "-4",
          number: 4,
          taskName: "直播教学如何上篮",
          time: "2018-05-01",
          type: -1
        }
      ];
    }
  }

}

export interface History{
  modifyNumber: string,
  number: number,
  taskName: string,
  time: string,
  type: number
};
