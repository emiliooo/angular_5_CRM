import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { DetailclientComponent } from "./detailclient/detailclient.component";
import { ContractsComponent } from "./contracts/contracts.component";
import { DetailcontractComponent } from "./detailcontract/detailcontract.component";
import { AddnewComponent } from "./addnew/addnew.component";
import { AuthGuard } from "./auth/auth.guard";


const CLIENTS_ROUTES: Route[] = [
  { path: 'detail/:id', component: <any>DetailclientComponent, canActivate: [AuthGuard] },
  { path: 'contracts', component: <any>ContractsComponent, canActivate: [AuthGuard] },
  { path: 'contracts/:id', component: <any>DetailcontractComponent, canActivate: [AuthGuard] },
  { path: 'add', component: <any>AddnewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(CLIENTS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class ClientsRoutingModule { }
