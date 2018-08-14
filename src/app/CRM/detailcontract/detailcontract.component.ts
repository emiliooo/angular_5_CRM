import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-detailcontract',
  templateUrl: './detailcontract.component.html',
  styleUrls: ['./detailcontract.component.css']
})
export class DetailcontractComponent implements OnInit {

  constructor(private servise: CustomerService, private route: ActivatedRoute) { }

  contractDetails;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const id = +this.route.snapshot.params['id'];
    this.servise.getContract(id).subscribe(res => {
      this.contractDetails = res;
    });
  }

}
