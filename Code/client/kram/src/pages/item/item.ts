import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { KramPage } from '../kram/kram';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  private editable: boolean;
  item = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
  confirmDelete() {
    let confirm = this.alertCtrl.create({
      title: 'DELETE',
      message: 'Deleting an item is permanent. Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes');
          }
        }
      ]
    });
    confirm.present();
  }
}
