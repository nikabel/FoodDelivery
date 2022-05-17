import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageDishComponent } from './create-page-dish/create-page-dish.component';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';



@NgModule({
  declarations: [DashboardPageComponent, CreatePageDishComponent, SearchPipe, AdminMainComponent, EditDishComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AdminMainComponent, children:[
          {path: '', redirectTo:'/admin/information', pathMatch: 'full'},
          {path: 'information', component: DashboardPageComponent},
          {path: 'createDish', component: CreatePageDishComponent},
          {path: 'editDish/:id', component: EditDishComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
