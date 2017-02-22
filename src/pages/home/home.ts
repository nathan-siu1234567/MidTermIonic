/*
File Name: home.ts
Student num: 200281793  
Authors Name: Nathan Siu
*/

import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import angular fire 2
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
shopLists: FirebaseListObservable<any>;// reference to the database

public list:any;

  constructor(public navCtrl: NavController, public navParams:NavParams, af: AngularFire) {
     
    this.shopLists = af.database.list('/shoppingList');//get the list from db
     this.list={};//list object 
  
    
  }

  //methods

//save list to db
  saveList(){
    console.log(this.list); //log to console
    this.shopLists.push(this.list);// saves list to db
    this.navCtrl.push(HomePage);// redirect to home page

  }
  cancelButton(){
    this.navCtrl.push(HomePage);// redirect to home page
  }

}
