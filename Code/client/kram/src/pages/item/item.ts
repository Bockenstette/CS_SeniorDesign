import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KramPage } from '../kram/kram';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  constructor(public navCtrl: NavController) {
  }
  goToKram(params){
    if (!params) params = {};
    this.navCtrl.push(KramPage);
  }
}
