import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class GithubService {

  constructor(private http:HttpClient) { }
  public getUser(username:string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
  public getRepositorios(username:string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
