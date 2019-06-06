import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvisorService } from '../services/advisor.service';
import { Advisor } from '../model/advisor';


@Component({
  selector: 'app-advisor-details',
  templateUrl: './advisor-edit.component.html',
  styleUrls: ['./advisor-edit.component.css']
})

export class AdvisorEditComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  advisorDetails: any = {};

  constructor( private service: AdvisorService, private activatedRoute: ActivatedRoute, private router: Router) {
      this.advisorDetails = new Advisor();
     
  }

  ngOnInit() {
    this.service.getAdvisor(this.id).subscribe((data: {}) => {
      this.advisorDetails = data;
    })
  }

  updateAdvisor() {
    if ( window.confirm('Are you sure, you want to update?')) {
      this.service.updateAdvisor(this.id, this.advisorDetails).subscribe(data => {
        this.router.navigate(['/advisors-list'])
      })
    }
  }

}