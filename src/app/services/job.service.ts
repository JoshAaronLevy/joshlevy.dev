import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
//     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
//     'Content-Type':  'application/json'
//   })
// };

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) {}

  getJobs(): Observable<any> {
    const url = `${apiUrl}/jobs`;
    return this.http.get(url)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  addJob(
    params: HttpParams = new HttpParams()
  ) {
    const url = `${apiUrl}/jobs`;
    return this.http.post<any>(url, params)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
