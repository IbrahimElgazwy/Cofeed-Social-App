import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MessagesComponent }];

@NgModule({
  declarations: [MessagesComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MessagesComponent]
})
export class MessagesRoutingModule {}