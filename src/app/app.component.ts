import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stories: User[] = [
    {
      name: 'You', 
      email: '@ibrahim', 
      imgUrl: "https://pbs.twimg.com/profile_images/1153966095444992000/1lpIyHaQ.jpg"},
    {
      name: 'Superdi', 
      email: '@superdi',
      imgUrl: "https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png"
    },
    {
      name: 'Dean', 
      email: '@dean',
      imgUrl: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=3500&q=80"
    },
    {
      name: 'Theodore', 
      email: '@theodore',
      imgUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: 'Waiter', 
      email: '@waiter',
      imgUrl: "https://pbs.twimg.com/profile_images/1153966095444992000/1lpIyHaQ.jpg"
    },
    {
      name: 'Jesie', 
      email: '@Jesie',
      imgUrl: "https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg"
    },
    {
      name: 'Enola', 
      email: '@superdi',
      imgUrl: "https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png"
    }
  ]


}
