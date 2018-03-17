import { Component } from '@angular/core';
import { App, MenuController, NavController, PopoverController } from 'ionic-angular';
import { ItemPage } from '../item/item';

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
}
