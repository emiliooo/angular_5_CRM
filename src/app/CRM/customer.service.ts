import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Config } from "../model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  config: Config = {
    customerLimits: 2,
    apiUrl: 'http://localhost:13378'
  };

  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get<[any]>(`${this.config.apiUrl}/customers`);
  }
  createCustomer(Customer) {
   return this.httpClient.post(`${this.config.apiUrl}/customers`, Customer);
  }
  deleteCustomer(Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${Customer.id}`);
  }
  getCust(id) {
    return this.httpClient.get(`${this.config.apiUrl}/customers/${id}`);
  }
  getContracts() {
    return this.httpClient.get(`${this.config.apiUrl}/contracts/`);
  }
  getContract(id) {
    return this.httpClient.get(`${this.config.apiUrl}/contracts/${id}`);
  }




};
