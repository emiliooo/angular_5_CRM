import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  customers: any;
  constructor(private customService: CustomerService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.customService.getCustomers().subscribe(response => {
      this.customers = response;
    });
  }

  deleteCustomer(customer) {
    this.customService.deleteCustomer(customer).subscribe();
    this.loadData();
  }

}
