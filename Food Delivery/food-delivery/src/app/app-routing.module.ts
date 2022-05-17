import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {
    path:'', component: MainLayoutComponent, children:[
     // {path:'', redirectTo:'', pathMatch: 'full'},
      {path:'restaurants/:id', component: MenuComponent},
      {path:'restaurants', component: MainPageComponent},
    ]},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
