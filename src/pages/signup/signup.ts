import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  today;
  user_Name;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // private datePicker: DatePicker
    this.today = new Date().toDateString();
    
  }

  doSubmit(){
    console.log(this.today);
    console.log(this.user_Name);
    console.log(this.password);
  }

  // datepicker(){
  //   this.datePicker.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //   );
  // }

}
