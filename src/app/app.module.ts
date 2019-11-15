import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SuccessModule,
    WarningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
