import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
   apiKey: "AIzaSyDf6wrehtgP8QKcijvy4daPidjyR6ZpB6E",
    authDomain: "midterm-f1c55.firebaseapp.com",
    databaseURL: "https://midterm-f1c55.firebaseio.com",
    storageBucket: "midterm-f1c55.appspot.com",
    messagingSenderId: "791583500981"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
