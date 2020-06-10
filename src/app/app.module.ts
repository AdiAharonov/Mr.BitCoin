import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule }  from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailsPageComponent } from './pages/contacts-details-page/contacts-details-page.component';
import { ContactsEditPageComponent } from './pages/contacts-edit-page/contacts-edit-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { BtcService} from './services/btc.service';

import { ContactService } from './services/contact.service';
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
    ChartsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactService, BtcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
