import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, StopPropagationDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
    StopPropagationDirective
  ]
})
export class SharedModule { }
