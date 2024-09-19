import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesDetail1Component } from './employees-detail1/employees-detail1.component';
import { EmployeesDetail2Component } from './employees-detail2/employees-detail2.component';

const routes: Routes = [

  {path: "", redirectTo:"/list", pathMatch: "full"},
  {path:"de", redirectTo:"/detail", pathMatch: "prefix"},
  {path: "list", component: StudentListComponent},
  {path: "detail", component: StudentDetailComponent},
  {path: "detail/:id", component: StudentDetailComponent},
  {path: "employees", component :EmployeesComponent, 
    children : [
      {path: "employees-detail1", component: EmployeesDetail1Component},
      {path: "employees-detail2", component: EmployeesDetail2Component}
    ]
  },
  {path: "**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [StudentListComponent, StudentDetailComponent,PageNotFoundComponent];
