import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizeComponent } from './visualize/visualize.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'visualize', component: VisualizeComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}