import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'data-structures';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = ;

  constructor(private http: HttpClient) {}
}
