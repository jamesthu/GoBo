import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { ReportPage } from '../report/report';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  historyPage: any = HistoryPage;
  reportPage: any = ReportPage;
  myWallet = {
    'todayGoldCoin': 12,
    'totalGoldCoin': 880,
    'todayPoint': 106,
    'totalPoint': 886
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }
  // this.getMyWallet();

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  getMyWallet(){
    
  }

  recharge() {
    let alert = this.alertCtrl.create({
      title: '万分抱歉',
      message: '测试阶段不支持现金充值，如果您希望虚拟充值，请联系我们并留言“我要充值”，我们将在后台为您操作。',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '联系我们',
          handler: () => {
            console.log('Contact us clicked');
            this.navCtrl.push(this.reportPage);
          }
        }
      ]
    });
    alert.present();
  }

  history() {
    this.navCtrl.push(this.historyPage);
  }

}
