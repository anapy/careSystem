import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IParent } from 'src/app/models/parent.model';

@Injectable({
  providedIn: 'root',
})
export class ParentService {
  constructor(private http: HttpClient) {}

  createParent(parent: IParent): Promise<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(`${environment.SERVER_URL}/parents`, parent, httpOptions)
      .toPromise();
  }

  getParents(): Promise<Array<IParent>> {
    return this.http
      .get<Array<IParent>>(`${environment.SERVER_URL}/parents`)
      .toPromise();
  }
}
