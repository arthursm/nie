import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

/**
 * Generated class for the HiraganaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hiragana',
  templateUrl: 'hiragana.html',
}) 
 
export class HiraganaPage { 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }  
  oi(){
   document.write('<audio autoplay><source src="https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fa1.mp3?alt=media&token=6c5d3483-4e88-4b8c-80ac-0a137950f15d" type="audio/mpeg"></audio>');
  }
   items = [{
      "audio": "https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fa1.mp3?alt=media&token=6c5d3483-4e88-4b8c-80ac-0a137950f15d",
      "imagem": "あ",
      "pergunta": "あ",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango" 
    },{
      "audio": "Fulano",
      "imagem": "Rua AaBbCc, N° 0000",
      "pergunta": "(99) 9-9999-9999",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango"
    }] 
}
