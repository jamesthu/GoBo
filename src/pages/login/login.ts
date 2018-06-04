import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginId: any = "";
  loginPwd: any = "";

  succeed: boolean = true;

  accountPage: any = AccountPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if((this.loginId == "" || this.loginPwd == "")) {
      this.succeed = false;
    }
    else{
      this.succeed = true;
      this.navCtrl.insert(0, this.accountPage);
      this.navCtrl.popToRoot();
    }
  }

}
