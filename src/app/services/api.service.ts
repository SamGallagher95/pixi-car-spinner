import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSpriteJson(fileName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`assets/${fileName}.json`).subscribe(data => {
        resolve(data);
      });
    });
  }
}
