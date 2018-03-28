import { Component } from '@angular/core';
import { App, MenuController, NavController, PopoverController, ViewController, AlertController, NavParams } from 'ionic-angular';
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
  sortBy: string;

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public navParms: NavParams) {}

  ngOnInit() {
    if (this.navParms.data) {
      this.sortBy = this.navParms.data.sortBy;
    }
  }

  close() {
    this.viewCtrl.dismiss(this.sortBy);
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Sort By');

    alert.addInput({
      type: 'radio',
      label: 'Alphabetical',
      value: 'alphabetical',
      checked: this.sortBy == 'alphabetical'
    });

    alert.addInput({
      type: 'radio',
      label: 'Location',
      value: 'location',
      checked: this.sortBy == 'location'
    });

    alert.addInput({
      type: 'radio',
      label: 'Price',
      value: 'price',
      checked: this.sortBy == 'price'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.sortBy = data;
        this.close();
      }
    });

    alert.present();
  }
}

@Component({
  selector: 'page-kram',
  templateUrl: 'kram.html'
})
export class KramPage {
  showSearchbar = false;
  sortBy = 'alphabetical';

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
    let popover = this.popoverCtrl.create(PopoverPage, {
      sortBy: this.sortBy
    });
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      this.sortBy = data;
    })
  }
}
