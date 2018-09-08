import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-module/header/header.component';
import { ClientsComponent } from './CRM/clients/clients.component';
import { ContractsComponent } from './CRM/contracts/contracts.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AddnewComponent } from './CRM/addnew/addnew.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailclientComponent } from './CRM/detailclient/detailclient.component';
import { DetailcontractComponent } from './CRM/detailcontract/detailcontract.component';
import { LoginModule } from 'src/app/CRM/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ContractsComponent,
    AddnewComponent,
    DetailclientComponent,
    DetailcontractComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
