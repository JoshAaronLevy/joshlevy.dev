import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as Parse from 'parse';
import * as parse from '../../../keys/parse';
import { parseResults } from '../../../shared/parseResults';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
	providers: [
		MessageService
	]
})
export class ProjectsComponent implements OnInit {
	loadingProjects: boolean;
	loadingError: boolean;
	projects: any;
	markerColor: any;

	constructor(
		private messageService: MessageService
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit(): void {
		this.loadingProjects = true;
		this.loadingError = false;
		this.markerColor = '#ae0001';
		this.getProjects();
	}

	async getProjects() {
		const devProjects = Parse.Object.extend('Projects');
		const query = new Parse.Query(devProjects);
		await query.find().then((results) => {
			this.projects = parseResults(results);
			setTimeout(() => {
				if (this.projects.length > 0) {
					this.loadingError = false;
					this.projects.sort(function (a, b) {
						return a.order - b.order;
					});
				} else {
					this.loadingError = true;
				}
				this.loadingProjects = false;
				return this.projects;
			}, 500);
		}, (error) => {
			console.error(error);
			this.loadingProjects = false;
		});
	}

	showGetError() {
		this.messageService.add({
			severity: 'error'
		});
	}
}
