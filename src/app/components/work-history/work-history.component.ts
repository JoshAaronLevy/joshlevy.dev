import { Component, OnInit } from '@angular/core';
import { Jobs } from 'app/models/jobs.interface';
import { JobService } from 'app/services/job.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
  providers: [
    JobService,
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
    public jobService: JobService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadingJobs = true;
    this.loadingError = false;
    this.getJobs();
  }

  getJobs() {
    return this.jobService.getJobs().subscribe(data => {
      if (data) {
        this.loadingJobs = false;
        this.jobs = data.jobs;
        this.jobs.sort(function (a, b) {
          return a.id - b.id;
        });
        this.cols = [
          {
            header: 'Company',
            field: 'company'
          },
          {
            header: 'Title',
            field: 'shortTitle'
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
        this.loadingJobs = false;
        this.loadingError = true;
        this.showGetError();
      }
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
