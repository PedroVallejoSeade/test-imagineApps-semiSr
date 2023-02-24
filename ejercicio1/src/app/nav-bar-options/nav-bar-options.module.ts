import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarOptionsRoutingModule } from './nav-bar-options-routing.module';

import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { SearchComponent } from './pages/search/search.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    EnterpriseComponent,
    SearchComponent,
    SolutionsComponent
  ],
  imports: [
    CommonModule,

    NavBarOptionsRoutingModule
  ]
})
export class NavBarOptionsModule { }
