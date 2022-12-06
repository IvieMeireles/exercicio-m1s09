import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage
  
  constructor() {
    this.storage = window.localStorage
   }

   set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false; // valida se o navegador tem a função de localstorage, caso não tenha, retornará falso
    
  }


  realizarLogin(informacoes: any) {
    const CHAVE = 'Chave'
    const infoLogin = []
    const informacoesEnviadas = {
      email: informacoes.target.email.value,
      password: informacoes.target.password.value      
    };
    infoLogin.push(informacoesEnviadas)
    console.log(informacoesEnviadas);
    
    localStorage.setItem(CHAVE, JSON.stringify(informacoes))
    
}
}
