import { Routes } from '@angular/router';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/edit/edit.component';
import { createComponent } from '@angular/core';
import { IndexComponent } from './employee/index/index.component';

export const routes: Routes = [
    { path: 'employee', redirectTo: 'employee/index', pathMatch:'full'},
    {path: 'employee/index' , component: IndexComponent},
    { path: 'employee/create', component: CreateComponent },
    { path: 'employee/:employeeId/edit', component: EditComponent } 
];
