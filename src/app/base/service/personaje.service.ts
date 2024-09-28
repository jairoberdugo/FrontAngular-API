import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';
import { personaje } from '../interface/perso.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) {}

  searchCharacters(query='',page=1){
    const filter = `${enviroment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<personaje[]>(filter)
  }
  getDetails(id:number){
    return this.http.get<personaje>(`${enviroment.baseUrlAPI}/${id}`);

  }
}
