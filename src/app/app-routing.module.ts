import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { KanyeComponent } from './kanye/kanye.component';
import { TylerComponent } from './tyler/tyler.component';
import { XxxtentacionComponent } from './xxxtentacion/xxxtentacion.component';
import { TravisComponent } from './travis/travis.component';
import { ASAPComponent } from './asap/asap.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'kanye',
    component: KanyeComponent,
  },
  {
    path: 'tyler',
    component: TylerComponent,
  },
  {
    path: 'xxxtentacion',
    component: XxxtentacionComponent,
  },
  {
    path: 'travis',
    component: TravisComponent,
  },
  {
    path: 'ASAP',
    component: ASAPComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
