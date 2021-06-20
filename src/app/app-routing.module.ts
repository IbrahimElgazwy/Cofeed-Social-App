import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'saved-posts',
    loadChildren: () => import('./saved-posts/saved-posts.module').then(m => m.SavedPostsModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [RouterModule.forRoot(routes), SharedModule, BrowserModule],
  exports: [RouterModule, HomeComponent, NotFoundComponent]
})

export class AppRoutingModule {}
