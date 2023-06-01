import { Company } from './../model/company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private readonly API = '/assets/companies.json';

  constructor(private httpClient: HttpClient) {
  }

  list(){
    return this.httpClient.get<Company[]>(this.API);
  }
}
