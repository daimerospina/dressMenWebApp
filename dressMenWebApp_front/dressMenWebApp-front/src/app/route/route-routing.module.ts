import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CatalogBodyComponent } from '../catalog-body/catalog-body.component';
import { OrderFormBodyComponent } from '../order-form-body/order-form-body.component';

const routes: Routes = [{
      path:'',  component:HomeComponent
    },
    {
      path:'catalog',  component:CatalogBodyComponent
    }
    ,
    {
      path:'catalog/order',  component:OrderFormBodyComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
