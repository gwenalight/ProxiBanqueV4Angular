import { Component, OnInit } from '@angular/core';
import { AdvisorService } from '../services/advisor.service';

@Component({
  selector: 'app-advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css']
})
export class AdvisorListComponent implements OnInit {

  advisor: any = [];

  constructor(
    public service: AdvisorService
  ) { }

  ngOnInit() {
    this.loadAdvisors()
  }

  
  loadAdvisors() {
    return this.service.getAdvisors().subscribe((data: {}) => { console.log(data);
      this.advisor = data; 
    })
  }

  deleteAdvisor(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.service.deleteAdvisor(id).subscribe(data => {
        this.loadAdvisors()
      })
    }
  }  

}