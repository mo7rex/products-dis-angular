import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProdectComponent } from './prodect/prodect.component';
import { ProdectDetailsComponent } from './prodect-details/prodect-details.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'prodect',
    children:[{
      path:'', component: ProdectComponent
    },
    {
      path:'details/:id',
      component:ProdectDetailsComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
