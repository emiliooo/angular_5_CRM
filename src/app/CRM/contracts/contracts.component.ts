import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private service: CustomerService) { }
  contracts: any;

  ngOnInit() {
    this.loadData();
  }

 

  loadData() {
     this.service.getContracts().subscribe(response => {
      this.contracts = response;
    });
  }

}
