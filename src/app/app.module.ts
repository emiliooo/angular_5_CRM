import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-module/header/header.component';
import { ClientsComponent } from './CRM/clients/clients.component';
import { ContractsComponent } from './CRM/contracts/contracts.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddnewComponent } from './CRM/addnew/addnew.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailclientComponent } from './CRM/detailclient/detailclient.component';
import { DetailcontractComponent } from './CRM/detailcontract/detailcontract.component';
import { LoginModule } from 'src/app/CRM/login/login.module';
import { AuthGuard } from 'src/app/CRM/auth/auth.guard';
import { LayoutService } from './shared-module/layout.service';
import { ClientsRoutingModule } from './CRM/clients-routing.module';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ContractsComponent,
    AddnewComponent,
    DetailclientComponent,
    DetailcontractComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    ClientsRoutingModule
  ],
  providers: [AuthGuard, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
