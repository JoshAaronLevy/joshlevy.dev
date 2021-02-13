import { Component, OnInit } from '@angular/core';
import { Jobs } from 'app/models/jobs.interface';
import { JobService } from 'app/services/job.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  jobs: Jobs[] = [];
  jobDetails: any;
  expandedJobs: number[] = [];

  constructor(
    public jobService: JobService
  ) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    return this.jobService.getJobs().subscribe(data => {
      this.jobs = data.jobs;
      this.jobs.sort(function (a, b) {
        return a.id - b.id;
      });
      // console.log(this.jobs);
    });
  }

  // displayDetails(selectedJob) {
  //   let superJenkyJoshArray = [];
  //   this.jobDetails = selectedJob.id;
  //   if (!this.isExpanded(this.jobDetails)) {
  //     this.expandedJobs.push(selectedJob.id);
  //   } else {
  //     for (let i = 0; i < this.expandedJobs.length; i++) {
  //       if (this.expandedJobs[i] !== this.jobDetails) {
  //         superJenkyJoshArray.push(this.expandedJobs[i]);
  //       }
  //     }
  //     this.expandedJobs = superJenkyJoshArray;
  //   }
  //   console.log(this.expandedJobs);
  // }

  displayDetails(selectedJob) {
    this.jobDetails = selectedJob.id;
    if (!this.isExpanded(this.jobDetails)) {
      this.expandedJobs.push(selectedJob.id);
    } else {
      this.expandedJobs.splice(this.expandedJobs.indexOf(selectedJob.id), 1);
    }
    console.log(this.expandedJobs);
  }

  isExpanded(jobId: number) {
    return this.expandedJobs.includes(jobId);
  }

}
