import { SmsViewComponent } from './sms-view/sms-view.component';
import { SmsSendComponent } from './sms-send/sms-send.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'smsSend',
    component: SmsSendComponent,
  },
  {
    path: 'smsView',
    component: SmsViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsRoutingModule { }

export const routedComponents = [
  SmsSendComponent,
  SmsViewComponent
];