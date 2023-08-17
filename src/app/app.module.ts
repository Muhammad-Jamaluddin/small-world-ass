import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ClientsComponent } from './components/clients/clients.component';

import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Other Modules 
    LayoutModule,
    SharedModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
