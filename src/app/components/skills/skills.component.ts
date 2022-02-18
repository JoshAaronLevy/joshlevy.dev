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
	skillOptions: any;
	selectedSkills: any = [];
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
			this.skillOptions = [
				{
					name: 'Front-End'
				},
				{
					name: 'Back-End'
				},
				{
					name: 'API'
				},
				{
					name: 'CI/CD'
				},
				{
					name: 'Dev Tools'
				}
			];
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

	checkSkillFilters(filter) {
		this.filter = {name: filter};
		if (!this.selectedSkills.includes(this.filter)) {
			this.selectedSkills.push(this.filter);
			this.filterSkills(this.selectedSkills);
		}
	}

	filterSkills(selectedSkills) {
		const skillList = [];
		this.selectedSkills = selectedSkills;
		if (this.selectedSkills.length > 0) {
			for (let i = 0; i < this.skills.length; i++) {
				for (let j = 0; j < this.selectedSkills.length; j++) {
					if (this.skills[i].categories.includes(this.selectedSkills[j].name)) {
						skillList.push(this.skills[i]);
					}
				}
			}
			const uniqueSkills = skillList.filter((element, index) => {
				return skillList.indexOf(element) === index;
			});
			this.filteredSkills = uniqueSkills;
		} else {
			this.filteredSkills = this.skills;
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
