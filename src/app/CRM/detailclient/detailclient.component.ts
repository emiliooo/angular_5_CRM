import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit , OnDestroy , OnChanges {

  customer: any;

  constructor(private customService: CustomerService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('onInit odpalone');
    this.loadClient();
  }

  ngOnDestroy() {
    console.log('Destroy odpalone');
  }

  ngOnChanges() {
    console.log( 'Change odpalone');
  }

  loadClient() {
    const id = +this.route.snapshot.params['id'];

    this.customService.getCust(id).subscribe(response => {
      this.customer = response;
    });
  }

}
