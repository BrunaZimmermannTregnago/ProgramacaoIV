import { environment } from './../../environments/environment';
import { DogDTO } from 'src/app/model/dog.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  saveDog(dog: DogDTO) {
    return this.httpClient.post<void>(`${environment.urlApi}/register`, dog);
  }

  editDog(dog: DogDTO) {
    return this.httpClient.put<void>(`${environment.urlApi}/edit`, dog);
  }

  getDogs() {
    return this.httpClient.get<Array<DogDTO>>(`${environment.urlApi}/get-dogs`);
  }

  deleteDog(id: number) {
    return this.httpClient.delete<void>(`${environment.urlApi}/delete/${id}`);
  }
}
