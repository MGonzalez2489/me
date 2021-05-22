import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { BannerComponent } from './components/banner/banner.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AboutMeComponent, BannerComponent, WhoAmIComponent, WhatIDoComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule
  ]
})
export class AboutMeModule { }
