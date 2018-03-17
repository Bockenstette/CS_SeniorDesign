import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KramPage } from '../kram/kram';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToKram(params){
    if (!params) params = {};
    this.navCtrl.push(KramPage);
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  public goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
