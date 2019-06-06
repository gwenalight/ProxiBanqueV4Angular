import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    endpoint = 'http://localhost:3000';
    // endpoint = 'http://localhost:8080/myapp';

    constructor(private http: HttpClient) { }



    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.endpoint + '/clients')
    }

    getClient(id): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/clients/' + id)
    }

    createClient(client): Observable<Client> {
        return this.http.post<Client>(this.endpoint + '/clients', JSON.stringify(client))
    }

    updateClient(id, client): Observable<Client> {
        return this.http.put<Client>(this.endpoint + '/clients/' + id, JSON.stringify(client))
    }

    deleteClient(id) {
        return this.http.delete<Client>(this.endpoint + '/clients/' + id)
    }


}