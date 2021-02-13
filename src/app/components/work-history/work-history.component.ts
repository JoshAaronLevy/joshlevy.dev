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
      console.log(this.jobs);
    });
  }

}
