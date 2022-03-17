import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SentinelAuthProviderListComponent} from '@sentinel/auth/components';
import {SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard} from '@sentinel/auth/guards';

const routes: Routes = [
  {
    path: 'statistical',
    loadChildren: () => import('./statistical/statistical.module').then(m => m.StatisticalModule),
    //canActivate: [SentinelAuthGuardWithLogin],
  },
  {
    path: '',
    redirectTo: 'statistical',
    pathMatch: 'full'
  },
  /*{
    path: 'login',
    component: SentinelAuthProviderListComponent,
    canActivate: [SentinelNegativeAuthGuard]
  },*/
  {
    path: '**',
    redirectTo: 'statistical'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
