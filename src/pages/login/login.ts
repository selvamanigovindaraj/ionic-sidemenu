import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  doLogin(){
  this.navCtrl.setRoot('MenuPage')
}
doRegister(){
  this.navCtrl.push('SlidesPage')
}

}
