import { CompaniesService } from './../services/companies.service';
import { Company } from './../model/company';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Observable<Company[]>;
  displayedColumns = ['name', 'cnpj'];

  constructor(private companiesService: CompaniesService){
    this.companies = this.companiesService.list();
  }

  ngOnInit(): void {}
}
