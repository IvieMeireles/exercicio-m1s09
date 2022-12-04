import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
personagem: any = {
  nomePersonagem: 'Jon Snow',
  imagem: 'https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg? ims=704x264',
  nomeAtor: 'Christopher Catesby Harington',
  descricao: 'Christopher Catesby Harington é um ator britânico. É mais conhecido por interpretar Jon Snow na série televisiva Game of Thrones da HBO.'
}
}
