import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
// import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,  
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    // DatePicker,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
