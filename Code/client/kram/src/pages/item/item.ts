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
      "Name": "Test Name",
      "Quantity": 1,
      "Price": 100.00,
      "Location": "Room",
      "Notes": "These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. These are notes. "
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
