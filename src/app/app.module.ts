import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth';
import { Home } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyAWH5B3XmnTc1p78waNYBZwkilqnZDytdc",
    authDomain: "pertemuan11-d119d.firebaseapp.com",
    databaseURL: "https://pertemuan11-d119d.firebaseio.com",
    projectId: "pertemuan11-d119d",
    storageBucket: "pertemuan11-d119d.appspot.com",
    messagingSenderId: "932724934500"
};

@NgModule({
  declarations: [
    MyApp,
    Home
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar, 
    AuthProvider
  ]
})
export class AppModule {}
