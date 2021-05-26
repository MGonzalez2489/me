import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./me/about-me/about-me.module').then(f => f.AboutMeModule) },
  { path: 'resume', loadChildren: () => import('./me/resume/resume.module').then(f => f.ResumeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
