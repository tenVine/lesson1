import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessItemComponent } from './success-item/success-item.component';



@NgModule({
  declarations: [SuccessItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SuccessItemComponent]
})
export class SuccessModule { }
