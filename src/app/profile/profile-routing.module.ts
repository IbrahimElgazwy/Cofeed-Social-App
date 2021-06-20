import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ProfileComponent]
})
export class ProfileRoutingModule {}