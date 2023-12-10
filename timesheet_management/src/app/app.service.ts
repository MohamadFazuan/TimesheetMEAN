import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment.dev';
import { Project } from '../../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  create = (body: JSON) => {
    return this.http.post(environment.URL_ADDDRESS + '/create', body);
  }

  readAll = (): Observable<Project[]> => {
    return this.http.get<Project[]>(environment.URL_ADDDRESS + '/readAll');
  }

  readItem = (body: JSON) => {
    return this.http.post(environment.URL_ADDDRESS + '/readItem', body);
  }

  updateItem = (body: JSON) => {
    return this.http.post(environment.URL_ADDDRESS + '/updateItem', body);
  }

  delete = (body: JSON) => {
    return this.http.delete(environment.URL_ADDDRESS+'/deleteItem');
  }

}
