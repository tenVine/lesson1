import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningItemComponent } from './warning-item/warning-item.component';
import { WarningComponent } from './warning.component';


@NgModule({
  declarations: [WarningItemComponent, WarningComponent],
  imports: [
    CommonModule
  ],
  exports: [WarningItemComponent, WarningComponent]
})
export class WarningModule { }
