import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';


@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

    @Input()
    client = new Client();


    constructor(
        public service: ClientService,
        public router: Router
    ) {

    }   

    ngOnInit() { }

    addClient(client) {
        this.service.createClient(this.client).subscribe((data: {}) => {
            this.router.navigate(['/clients-list']);
        });
    }

}
