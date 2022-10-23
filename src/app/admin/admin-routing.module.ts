import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'view-contact',
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
export const AdminRoutingComponents = [
  ViewContactsComponent,
  AdminHomeComponent,
];
