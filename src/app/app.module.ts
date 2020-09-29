import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JogodavelhaModule } from './jogodavelha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JogodavelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
