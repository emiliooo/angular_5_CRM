import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  customer: any;

  constructor(private customService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadClient();
  }

  loadClient() {
    const id = +this.route.snapshot.params['id'];

    this.customService.getCust(id).subscribe(response => {
      this.customer = response;
    });

    
  }

}
