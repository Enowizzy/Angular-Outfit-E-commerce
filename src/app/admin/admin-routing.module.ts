import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
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
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'product-list',
        component: ProductListComponent,
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
  ProductListComponent,
];
