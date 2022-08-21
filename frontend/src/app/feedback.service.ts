import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor( private http:HttpClient  ) { }
  addFeedback(feedback:any){
    return this.http.post("https://tripista-mean-app.herokuapp.com/feedback",feedback);
  }
    listFeedback(){
    return this.http.get("https://tripista-mean-app.herokuapp.com/endpoints/");
  }

}
