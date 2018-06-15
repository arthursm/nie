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
  contador = 0;
contmais(){
  this.contador++;
}

   items = [{
      "audio": "https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fa1.mp3?alt=media&token=6c5d3483-4e88-4b8c-80ac-0a137950f15d",
      "imagem": "あ",
      "pergunta": "あ",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango" 
    },{
      "audio": "https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fe1.mp3?alt=media&token=8820caba-7d57-4baa-9b33-517bd4661d97",
      "imagem": "え",
      "pergunta": "(99) 9-9999-9999",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango"
    },{
      "audio": "https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fi1.mp3?alt=media&token=868471f9-e2f1-4f43-bdb5-3caa100d6fc3",
      "imagem": "い",
      "pergunta": "(99) 9-9999-9999",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango"
    },{
      "audio": "https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fo1.mp3?alt=media&token=2cf600dc-e6a4-4ab0-bf02-57bd8f5261a0",
      "imagem": "お",
      "pergunta": "(99) 9-9999-9999",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango"
    },{
      "audio": "https://firebasestorage.googleapis.com/v0/b/sobrodas-43ded.appspot.com/o/alfabeto%2Fu1.mp3?alt=media&token=be61e34a-0e99-4ba7-95aa-acfce6398f0d",
      "imagem": "う",
      "pergunta": "(99) 9-9999-9999",
      "resposta": "1 - OVO 39 - Queijo 46 - Galinha 63 - Cajuina 40 - Frango"
    }] 
}
