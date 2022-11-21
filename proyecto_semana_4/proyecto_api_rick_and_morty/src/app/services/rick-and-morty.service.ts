import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  API_URL: string="https://rickandmortyapi.com/api";

  constructor(private client: HttpClient) { }

  character (chNumber: number){
    return this.client.get(`${this.API_URL}/location/${chNumber}`)
  }
}
