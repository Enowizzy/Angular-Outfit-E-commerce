import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'view-contacts',
        component: ViewContactsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
export const AdminRoutingComponents = [ViewContactsComponent];
