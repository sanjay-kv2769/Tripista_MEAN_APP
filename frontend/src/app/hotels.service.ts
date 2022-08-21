import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http:HttpClient) { }

addHotel(hotel:any){
  return this.http.post('https://tripista-mean-app.herokuapp.com/endpoint/addhotel',hotel);
}

listHotel(){
  return this.http.get('https://tripista-mean-app.herokuapp.com/endpoint/');
}

deleteHotel(id:any){
  return this.http.delete('https://tripista-mean-app.herokuapp.com/endpoint/deletehotel/'+id);
}

singleHotel(id:any){
  return this.http.get('https://tripista-mean-app.herokuapp.com/endpoint/hotel/'+id);
}

updateHotel(id:any,hotel:any){
  return this.http.put('https://tripista-mean-app.herokuapp.com/endpoint/updatehotel/'+id,hotel);

}

}

