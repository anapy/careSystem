import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICare } from 'src/app/models/care.model';

@Injectable({
  providedIn: 'root',
})
export class CareService {
  constructor(private http: HttpClient) {}

  createCare(care: ICare): Promise<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(`${environment.SERVER_URL}/cares`, care, httpOptions)
      .toPromise();
  }

  getCares(): Promise<Array<ICare>> {
    return this.http
      .get<Array<ICare>>(`${environment.SERVER_URL}/cares`)
      .toPromise();
  }
}
