import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KramPage } from '../kram/kram';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  private editable: boolean;
  item = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.editable = navParams.get("editable");
    this.item = {
      "Name": "Nintendo Switch",
      "Quantity": 1,
      "Price": 299.99,
      "Location": "Bedroom",
      "Notes": "Birthday present from mom and dad"
    };
  }
  goToKram(params){
    if (!params) params = {};
    this.navCtrl.push(KramPage);
  }
  getEditable(){
    return this.editable;
  }
  setEditable(val: boolean){
    this.editable = val;
  }
}
