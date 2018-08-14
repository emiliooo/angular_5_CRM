import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerType } from '../../model';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private route: Router) { }

  imie;
  adres;
  opis;
  wiek;
  type: CustomerType;
  CustomerType = CustomerType;

  ngOnInit() {

  }
  Clear() {
    this.imie = '',
      this.adres = '',
      this.opis = '',
      this.wiek = '';
  }

  add() {
    this.customerService.createCustomer({
      name: this.imie,
      age: this.wiek,
      type: this.type,
      photoUrl: '',
      categories: [],
      description: this.opis,
      address: {
        city: this.adres,
        houseNumber: 0,
        street: ''
      }
    }).subscribe();
    this.Clear();

    this.route.navigate(['/clients']);
  }

}
