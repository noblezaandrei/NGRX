import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PapersListComponent } from './papers-list/papers-list.component';

const routes: Routes = [
  { path: '', component: PapersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }