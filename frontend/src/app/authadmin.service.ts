import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  loginAdmin(user:any)
  {
    return this.http.post<any>("https://tripista-mean-app.herokuapp.com/admin",user)

  }
  constructor(private http:HttpClient) { }

  
  adminloggedIn()
{
  return !!localStorage.getItem('token')
}

getToken()
{
  return localStorage.getItem('token')
}

}

