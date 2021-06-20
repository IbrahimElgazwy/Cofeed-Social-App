import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedPostsComponent } from './saved-posts.component';

const routes: Routes = [{ path: '', component: SavedPostsComponent }];

@NgModule({
  declarations: [SavedPostsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SavedPostsComponent]
})
export class SavedPostsRoutingModule {}