import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ClientsComponent } from "./CRM/clients/clients.component";
import { ContractsComponent } from "./CRM/contracts/contracts.component";
import { AddnewComponent } from "./CRM/addnew/addnew.component";
import { DetailclientComponent } from "./CRM/detailclient/detailclient.component";
import { DetailcontractComponent } from "./CRM/detailcontract/detailcontract.component";
import { AuthGuard } from "./CRM/auth/auth.guard";

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'clients' },
  { path: 'clients', component: <any>ClientsComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: <any>DetailclientComponent, canActivate: [AuthGuard] },
  { path: 'contracts', component: <any>ContractsComponent, canActivate: [AuthGuard] },
  { path: 'contracts/:id', component: <any>DetailcontractComponent, canActivate: [AuthGuard] },
  { path: 'add', component: <any>AddnewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
