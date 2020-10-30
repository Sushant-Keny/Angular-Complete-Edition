import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthGuard } from '../_shared/guards/auth.guard';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { CanDeactivateGuard } from '../_shared/guards/can-component-deactivate.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: TaskDetailsComponent },
      { path: ':id/edit', component: TaskEditComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
