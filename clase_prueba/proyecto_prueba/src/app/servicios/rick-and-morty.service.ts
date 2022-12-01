import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  url: string = "https://rickandmortyapi.com/api/character/"
 
  constructor(private client: HttpClient){}

  character(numero: string | number){
    return this.client.get(this.url + numero)
  }
  
}
