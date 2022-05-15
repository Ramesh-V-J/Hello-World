import { routedComponents, SmsRoutingModule } from './sms-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    SmsRoutingModule
  ],
  providers: []
})
export class SmsModule { }
