import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import {Tab3Page} from '../tab3/tab3';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage='TabsPage';
  @ViewChild(Nav) nav:Nav;
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'My Profile', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contact' },
    { title: 'Tab 3', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'contacts' },
   
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage(page:PageInterface){
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    }else{
      this.nav.setRoot(page.pageName, params);
    }
  }
  isActive(page:PageInterface){
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  

  }

}
