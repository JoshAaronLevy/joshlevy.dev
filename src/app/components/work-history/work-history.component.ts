import { Component, OnInit } from '@angular/core';
import { Jobs } from 'app/models/jobs.interface';
import { Product } from 'app/models/product.interface';
import { JobService } from 'app/services/job.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
  providers: [
    JobService,
    ProductService
  ]
})
export class WorkHistoryComponent implements OnInit {
  jobs: Jobs[] = [];
  jobDetails: number;
  // expandedJobs: number[] = [];
  expandedJobs: {[jobId: number]: boolean} = {};
  products: Product[];

  constructor(
    public jobService: JobService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getJobs();
    this.getProducts();
  }

  getJobs() {
    return this.jobService.getJobs().subscribe(data => {
      this.jobs = data.jobs;
      this.jobs.sort(function (a, b) {
        return a.id - b.id;
      });
    });
  }

  getProducts() {
    this.productService.getProductsWithOrdersSmall().then(data => {
      this.products = data;
      console.log(this.products);
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

  // Checking which job details are being displayed from the expandedJobs array
  // displayDetails(selectedJob) {
  //   this.jobDetails = selectedJob.id;
  //   if (!this.isExpanded(this.jobDetails)) {
  //     this.expandedJobs.push(selectedJob.id);
  //   } else {
  //     this.expandedJobs.splice(this.expandedJobs.indexOf(selectedJob.id), 1);
  //   }
  //   console.log(this.expandedJobs);
  // }

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
}
