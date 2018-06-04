import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PersonalPage } from '../personal/personal';
import { WalletPage } from '../wallet/wallet';
import { RulebooksPage } from '../rulebooks/rulebooks';
import { ContactUsPage } from '../contact-us/contact-us';
import { HelpPage } from '../help/help';
import { MyObservePage } from '../my-observe/my-observe';
import { MyVideoPage } from '../my-video/my-video';
import { MyLikePage } from '../my-like/my-like';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  loginPage: any = LoginPage;

  selectedItem: any;
  items: Array<{note:string}>;
  selectedItemPrivacy: any;
  itemsPrivacy: Array<{note:string}>;
  pageIndex: any;

  rulebooksPage: any = RulebooksPage;
  helpPage: any = HelpPage;
  contactUsPage: any = ContactUsPage;

  personalPage: any = PersonalPage;
  walletPage: any = WalletPage;
  myObservePage: any = MyObservePage;
  myVideoPage: any = MyVideoPage;
  myLikePage: any = MyLikePage;

  user : {
    name: string,
    title: string,
    introduction: string,
    boardId: string,
    image: string,
    GPS: {
      x: number,
      y: number
    },
    goldCoin: number,
    points: number,
    credit: number
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.user = {
      name: '张三',
      title: '喜爱二次元的吃播主播',
      introduction: '未设置',
      boardId: '123456',
      image: '0.png',
      GPS: {
        x: 0,
        y: 0
      },
      goldCoin: 0,
      points: 0,
      credit: 0
    };

    this.selectedItem = navParams.get('item');

    this.items = []
    this.items.push({note: "规则说明"});
    this.items.push({note: "帮助"});
    this.items.push({note: "联系我们"});

    this.selectedItemPrivacy = navParams.get('item');

    this.itemsPrivacy = []
    this.itemsPrivacy.push({note: "个人资料"});
    this.itemsPrivacy.push({note: "我的金币"});
    this.itemsPrivacy.push({note: "观看历史"});
    this.itemsPrivacy.push({note: "我的视频"});
    this.itemsPrivacy.push({note: "我的喜欢"});

    this.pageIndex = {};
    this.pageIndex["规则说明"] = this.rulebooksPage;
    this.pageIndex["帮助"] = this.helpPage;
    this.pageIndex["联系我们"] = this.contactUsPage;

    this.pageIndex["个人资料"] = this.personalPage;
    this.pageIndex["我的金币"] = this.walletPage;
    this.pageIndex["观看历史"] = this.myObservePage;
    this.pageIndex["我的视频"] = this.myVideoPage;
    this.pageIndex["我的喜欢"] = this.myLikePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logout(){
    this.navCtrl.insert(0, this.loginPage);
    this.navCtrl.popToRoot();
  }

  itemTapped(event, item) {
    this.navCtrl.push(this.pageIndex[item['note']]);
  }

}
