import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  }
/*
ionic cordova platform add browser

ionic cordova run browser
*/


ionViewDidEnter(){
  console.log('AllahuAkbar');
  this.nativeAudio.preloadSimple('uniqueId1', '../media/300.mp3').then();}
a(){
  console.log('Clicado');
  this.nativeAudio.preloadSimple('12', 'https://firebasestorage.googleapis.com/v0/b/lustrequalquer.appspot.com/o/300.mp3?alt=media&token=7f1c1ad1-f307-47da-afc8-1afa36056178');
  this.nativeAudio.play('uniqueId1');
}
}
