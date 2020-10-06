import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';


const routes: Routes = [
  { path: 'angular-test-app/one', component: View1Component },
  { path: 'angular-test-app/two', component: View2Component },
  { path: 'angulartestapp', redirectTo: 'angular-test-app/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
