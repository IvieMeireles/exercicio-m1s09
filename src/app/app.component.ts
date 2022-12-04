import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercicio-m1s09';

  personagem = {
    nomePersonagem: 'Jon Snow',
    imagem: 'https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg? ims=704x264',
    nomeAtor: 'Christopher Catesby Harington',
    descricao:
      'Christopher Catesby Harington é um ator britânico. É mais conhecido por interpretar Jon Snow na série televisiva Game of Thrones da HBO.',
  };
}
