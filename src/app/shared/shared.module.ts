import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story/story.component';
import { FeedComponent } from './feed/feed.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';



@NgModule({
  declarations: [UsersComponent, StoryComponent, FeedComponent, SuggestionsComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [UsersComponent, StoryComponent, FeedComponent, SuggestionsComponent]
})
export class SharedModule { }
