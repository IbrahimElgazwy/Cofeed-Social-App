import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Feed } from '../models/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('feed') feed: Feed;
  @Output('likeClick') likeClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleLike(feed: Feed){
    this.likeClick.emit(feed);
  }

}
