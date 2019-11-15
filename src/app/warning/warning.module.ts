import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningItemComponent } from './warning-item/warning-item.component';



@NgModule({
  declarations: [WarningItemComponent],
  imports: [
    CommonModule
  ],
  exports: [WarningItemComponent]
})
export class WarningModule { }
