import { Component, OnInit } from '@angular/core';
import { Jobs } from 'app/models/jobs.interface';
import { MessageService } from 'primeng/api';
import * as Parse from 'parse';
import * as parse from '../../../keys/parse';
import { parseResults } from '../../../shared/parseResults';

@Component({
	selector: 'app-work-history',
	templateUrl: './work-history.component.html',
	styleUrls: ['./work-history.component.scss'],
	providers: [
		MessageService
	]
})
export class WorkHistoryComponent implements OnInit {
	loadingJobs: boolean;
	loadingError: boolean;
	jobs: Jobs[] = [];
	jobDetails: number;
	expandedJobs: {[jobId: number]: boolean} = {};
	cols: any = [];
	columns: any = [
		{
			header: 'Company',
			field: 'company'
		},
		{
			header: 'Title',
			field: 'title'
		},
		{
			header: 'Start Date',
			field: 'startDate'
		},
		{
			header: 'End Date',
			field: 'endDate'
		},
		{
			header: 'Actions',
			field: ''
		}
	];

	constructor(
		private messageService: MessageService
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit(): void {
		this.loadingJobs = true;
		this.loadingError = false;
		this.getJobs();
	}

	async getJobs() {
		const pastJobs = Parse.Object.extend('Jobs');
		const query = new Parse.Query(pastJobs);
		await query.find().then((results) => {
			this.jobs = parseResults(results);
			setTimeout(() => {
				if (this.jobs.length > 0) {
					this.loadingError = false;
					this.jobs.sort(function (a, b) {
						return a.order - b.order;
					});
					this.cols = [
						{
							header: 'Company',
							field: 'company'
						},
						{
							header: 'Title',
							field: 'title'
						},
						{
							header: 'Start Date',
							field: 'startDate'
						},
						{
							header: 'End Date',
							field: 'endDate'
						}
					];
				} else {
					this.loadingError = true;
				}
				this.loadingJobs = false;
				return this.jobs;
			}, 500);
		}, (error) => {
			console.error(error);
			this.loadingJobs = false;
		});
	}

	// Object key based tracking
	displayDetails(selectedJob) {
		this.jobDetails = selectedJob.id;
		if (!this.isExpanded(this.jobDetails)) {
			this.expandedJobs[this.jobDetails] = true;
		} else {
			this.expandedJobs[this.jobDetails] = false;
		}
	}

	isExpanded(jobId: number) {
		return this.expandedJobs[jobId];
	}

	showGetError() {
		this.messageService.add({
			severity: 'error'
		});
	}
}
