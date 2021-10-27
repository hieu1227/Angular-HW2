import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { InvoiceComponent } from './Invoice.component';

import { HeaderInovice } from './components/Header/HeaderInovice.component';
import { BodyInovice } from "./components/Body/BodyInvoice.component";
import { BalanceInovice } from './components/Balance/BalanceInovice.component'

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [InvoiceComponent, HeaderInovice, BodyInovice, BalanceInovice],
  bootstrap: [InvoiceComponent]
})
export class AppModule {

}
