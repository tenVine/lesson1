import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { SuccessItemComponent } from './success-item/success-item.component';

@NgModule({
  declarations: [SuccessItemComponent, SuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [SuccessItemComponent, SuccessComponent]
})
export class SuccessModule { }
