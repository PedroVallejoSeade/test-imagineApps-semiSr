import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterpriseComponent } from './pages/enterprise/enterprise.component';
import { SearchComponent } from './pages/search/search.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'enterprise',
        component: EnterpriseComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'solutions',
        component: SolutionsComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavBarOptionsRoutingModule { }
