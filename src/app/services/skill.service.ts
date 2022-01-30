import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class SkillService {

	constructor(
		private http: HttpClient
	) {}

	getSkills(): Observable<any> {
		const url = `${apiUrl}/skills`;
		return this.http.get(url)
			.pipe(
				map(res => {
					return res;
				})
			);
	}

	addSkill(
		params: HttpParams = new HttpParams()
	) {
		const url = `${apiUrl}/skills`;
		return this.http.post<any>(url, params)
			.pipe(
				map(res => {
					return res;
				})
			);
	}
}
