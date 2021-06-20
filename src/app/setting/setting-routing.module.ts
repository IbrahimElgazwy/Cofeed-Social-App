import { SettingComponent } from './setting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: SettingComponent }];

@NgModule({
  declarations: [SettingComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SettingComponent]
})
export class SettingRoutingModule {}