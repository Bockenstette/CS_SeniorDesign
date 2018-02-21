import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, MenuController, NavController, PopoverController } from 'ionic-angular';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-kram',
  templateUrl: 'kram.html'
})
export class KramPage {

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(app: App, public navCtrl: NavController, 
    public popoverCtrl: PopoverController, public menu: MenuController) {
    menu.enable(true);
  }

  goToItem(params) {
    if (!params) params = {};
    this.navCtrl.push(ItemPage);
  }
  openMenu() {
    this.menu.open();
  }
}
