import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CatalogBodyComponent } from '../catalog-body/catalog-body.component';

const routes: Routes = [{
  path:'',  component:HomeComponent
},
{
  path:'catalog',  component:CatalogBodyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
