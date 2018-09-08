<<<<<<< HEAD
import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {ClientsComponent} from "./CRM/clients/clients.component";
import {ContractsComponent} from "./CRM/contracts/contracts.component";
import {AddnewComponent} from "./CRM/addnew/addnew.component";
import {DetailclientComponent} from "./CRM/detailclient/detailclient.component";
import {DetailcontractComponent} from "./CRM/detailcontract/detailcontract.component";
=======
import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {ClientsComponent} from './CRM/clients/clients.component';
import {ContractsComponent} from './CRM/contracts/contracts.component';
import {AddnewComponent} from './CRM/addnew/addnew.component';
import {DetailclientComponent} from './CRM/detailclient/detailclient.component';
import { DetailcontractComponent } from './CRM/detailcontract/detailcontract.component';
>>>>>>> e62ea41666aa320c57b65da02d25676fcd9b7465

const APP_ROUTES : Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'clients' },
  { path: 'clients', component: <any>ClientsComponent },
  { path: 'detail/:id', component: <any>DetailclientComponent },
  { path: 'contracts', component: <any>ContractsComponent },
  { path: 'contracts/:id', component: <any>DetailcontractComponent },
  { path: 'add', component: <any>AddnewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
