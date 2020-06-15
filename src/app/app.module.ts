import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
// import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailsPageComponent } from './pages/contacts-details-page/contacts-details-page.component';
import { ContactsEditPageComponent } from './pages/contacts-edit-page/contacts-edit-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactService } from './services/contact.service';
import { ChartComponent } from './cmps/chart/chart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactsPageComponent,
    ContactsDetailsPageComponent,
    ContactsEditPageComponent,
    ChartsPageComponent,
    ChartComponent,
    SignupComponent,
    MoveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
