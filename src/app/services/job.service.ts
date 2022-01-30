import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

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
