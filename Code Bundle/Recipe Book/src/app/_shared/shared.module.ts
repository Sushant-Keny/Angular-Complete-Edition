import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { AlertComponent } from '../alert/alert.component';
import { PlaceHolderDirective } from './directives/placeholder.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
    CommonModule
  ]
})
export class SharedModule {  }
