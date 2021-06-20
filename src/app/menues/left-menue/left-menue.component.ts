import { User } from './../../shared/models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menue',
  templateUrl: './left-menue.component.html',
  styleUrls: ['./left-menue.component.scss']
})
export class LeftMenueComponent  {
  showUserInfo: boolean = true;
  user: User = {
    name: 'Superdi', 
    email: '@superdi.com',
    imgUrl: "https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png"
  }
  constructor() { }

  showUser(){
    this.showUserInfo = !this.showUserInfo;
  }
}
