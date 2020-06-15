import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { ContactsDetailsPageComponent } from './pages/contacts-details-page/contacts-details-page.component';
import { ContactsEditPageComponent } from './pages/contacts-edit-page/contacts-edit-page.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'charts', component: ChartsPageComponent },
  { path: 'contact/:id', component: ContactsDetailsPageComponent },
  { path: 'edit', component: ContactsEditPageComponent },
  { path: 'edit/:id', component: ContactsEditPageComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
