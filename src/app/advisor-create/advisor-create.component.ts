import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdvisorService } from '../services/advisor.service';
import { Advisor } from '../model/advisor';


@Component({
    selector: 'app-advisor-create',
    templateUrl: './advisor-create.component.html',
    styleUrls: ['./advisor-create.component.css']
})
export class AdvisorCreateComponent implements OnInit {

    @Input()
    advisorDetails = new Advisor();


    constructor(
        public service: AdvisorService,
        public router: Router
    ) {

    }

    ngOnInit() { }

    addAdvisor(dataAdvisor) {
        this.service.createAdvisor(this.advisorDetails).subscribe((data: {}) => {
            this.router.navigate(['/advisors-list']);
        });
    }

}
