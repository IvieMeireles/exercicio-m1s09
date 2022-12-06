
import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-novo-form',
  templateUrl: './novo-form.component.html',
  styleUrls: ['./novo-form.component.css'],
})
export default class NovoFormComponent {
  constructor(localStorageService: LocalStorageService) {}

  // realizarLogin(informacoes: any) {
  //   const CHAVE = 'Chave';
  //   const infoLogin = {
  //   email: document.getElementById('email'),
  //   password: document.getElementById('password')
  // }
  //   const informacoesEnviadas = {
  //     email: informacoes.target.email.value,
  //     password: informacoes.target.password.value,
  //   };
  //   localStorage.setItem(CHAVE, JSON.stringify(infoLogin));
  //   return informacoesEnviadas;
    
    
  // }
salvarLocalStorage(dados: any){
  const jsonDados = JSON.stringify(dados)
  localStorage.setItem('Meus dados', jsonDados)
}
}
