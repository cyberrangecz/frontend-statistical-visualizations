import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'statistical-page',
    loadChildren: () => import('./statistical-page/statistical-page.module').then((m) => m.StatisticalPageModule),
    //canActivate: [SentinelAuthGuardWithLogin],
  },
  {
    path: '',
    redirectTo: 'statistical-page',
    pathMatch: 'full',
  },
  /*{
      path: 'login',
      component: SentinelAuthProviderListComponent,
      canActivate: [SentinelNegativeAuthGuard]
    },*/
  {
    path: '**',
    redirectTo: 'statistical-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
