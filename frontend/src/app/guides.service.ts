import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  constructor(private http:HttpClient) { }

  addGuide(guide:any){
    return this.http.post('https://tripista-mean-app.herokuapp.com/endpointss/add-guide', guide)
  }

  listGuide(){
    return this.http.get('https://tripista-mean-app.herokuapp.com/endpointss/')
  }
}
