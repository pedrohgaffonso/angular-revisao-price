import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AmortizapriceComponent } from './Components/amortizaprice/amortizaprice.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AmortizapriceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
