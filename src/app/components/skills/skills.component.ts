import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as Parse from 'parse';
import * as parse from '../../../keys/parse';
import { parseResults } from '../../../shared/parseResults';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	providers: [
		MessageService
	]
})
export class SkillsComponent implements OnInit {
	loadingSkills: boolean;
	loadingError: boolean;
	skills: any;
	skill: any;
	filter: any;
	filteredSkills: any;
	allSelected = true;
	frontEndSelected = false;
	backEndSelected = false;
	first = 0;
	rows = 12;

	constructor(
		private messageService: MessageService
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	async ngOnInit() {
		this.loadingSkills = true;
		this.loadingError = false;
		await this.getSkills();
	}

	async getSkills() {
		const Skills = Parse.Object.extend('Skills');
		const query = new Parse.Query(Skills);
		return await query.find().then((results) => {
			this.skills = parseResults(results);
			this.skills.sort(function (a, b) {
				return a.order - b.order;
			});
			this.filteredSkills = this.skills;
			if (this.skills.length > 0) {
				this.loadingError = false;
			} else {
				this.loadingError = true;
			}
			this.loadingSkills = false;
		}, (error) => {
			console.error(error);
			this.loadingSkills = false;
		});
	}

	filterSkills(filter) {
		this.filter = filter;
		this.filteredSkills = [];
		for (let i = 0; i < this.skills.length; i++) {
			if (this.filter === 'Front-End') {
				this.allSelected = false;
				this.frontEndSelected = true;
				this.backEndSelected = false;
				if (this.skills[i].type === 'Front-End' || this.skills[i].type === 'Front/Back-End') {
					this.filteredSkills.push(this.skills[i]);
				}
			} else if (this.filter === 'Back-End') {
				this.allSelected = false;
				this.frontEndSelected = false;
				this.backEndSelected = true;
				if (this.skills[i].type === 'Back-End' || this.skills[i].type === 'Front/Back-End') {
					this.filteredSkills.push(this.skills[i]);
				}
			} else {
				this.allSelected = true;
				this.frontEndSelected = false;
				this.backEndSelected = false;
				this.filteredSkills.push(this.skills[i]);
			}
		}
	}

	next() {
		this.first = this.first + this.rows;
	}

	prev() {
		this.first = this.first - this.rows;
	}

	reset() {
		this.first = 0;
	}

	isLastPage(): boolean {
		return this.filteredSkills ? this.first === (this.filteredSkills.length - this.rows): true;
	}

	isFirstPage(): boolean {
		return this.filteredSkills ? this.first === 0 : true;
	}

	showGetError() {
		this.messageService.add({
			severity: 'error'
		});
	}
}
