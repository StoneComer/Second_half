import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { ResolveResolver } from './resolve.resolver';

const routes: Routes = [
  {
    path: 'res',
    component: CompComponent,
    resolve: [ResolveResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
