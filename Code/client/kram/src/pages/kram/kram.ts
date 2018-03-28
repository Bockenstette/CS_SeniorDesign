import { Component } from '@angular/core';
import { App, MenuController, NavController, PopoverController, ViewController, AlertController } from 'ionic-angular';
import { ItemPage } from '../item/item';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Refresh</button>
      <button ion-item (click)="showRadio()">Sort by...</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController) {}

  close() {
    this.viewCtrl.dismiss();
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Sort By');

    alert.addInput({
      type: 'radio',
      label: 'Alphabetical',
      value: 'alphabetical',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Location',
      value: 'location'
    });

    alert.addInput({
      type: 'radio',
      label: 'Price',
      value: 'price'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK'
    });

    this.close();
    alert.present();
  }
}

@Component({
  selector: 'page-kram',
  templateUrl: 'kram.html'
})
export class KramPage {
  showSearchbar = false;

  constructor(app: App, public navCtrl: NavController, 
    public popoverCtrl: PopoverController, public menu: MenuController) {
    menu.enable(true);
  }

  goToItem(params) {
    if (!params) params = {editable: true};
    this.navCtrl.push(ItemPage, params);
  }
  openMenu() {
    this.menu.open();
  }
  toggleSearchbar() {
    if (this.showSearchbar === false) {
      this.showSearchbar = true;
    } else {
      this.showSearchbar = false;
    }
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
