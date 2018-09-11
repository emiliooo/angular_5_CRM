import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ClientsComponent } from "./CRM/clients/clients.component";
import { AuthGuard } from "./CRM/auth/auth.guard";
import { PageNotFoundComponent } from "./shared-module/page-not-found/page-not-found.component";

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'clients' },
  { path: 'clients', component: <any>ClientsComponent, canActivate: [AuthGuard] }

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
