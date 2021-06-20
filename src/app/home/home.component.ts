import { feeds } from './../shared/models/feed';
import { Component, OnInit } from '@angular/core';
import { Feed } from '../shared/models/feed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  feeds: Feed[];
  filteredFeeds: Feed[];
  filterType: string = 'all';

  ngOnInit() {
    let storedFeeds = localStorage.getItem("feeds");
    if (storedFeeds === null) {
      this.filteredFeeds = [...feeds];
      this.feeds = feeds;
    } else {
      this.filteredFeeds =  [...JSON.parse(storedFeeds)];
      this.feeds = JSON.parse(storedFeeds);
    }
  }

  filterFeeds(type: string = "all") {
    this.filterType = type;
    if(type === 'all') this.filteredFeeds = [...this.feeds];
    else this.filteredFeeds = [...this.feeds].filter(f => f.type === type);
  }

  likeClick(feed){
    console.log(feed);
    const feeds: Feed[] = this.feeds.map(f => {
      if(f.id === feed.id){
        f.isLiked = true;
        f.likes +=  1;
      }
      return f;
    })
    this.feeds = feeds;
    localStorage.setItem('feeds', JSON.stringify(feeds));
    this.filterFeeds(this.filterType);
  }

}
