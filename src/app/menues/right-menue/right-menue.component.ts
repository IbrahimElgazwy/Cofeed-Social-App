import { Suggestion, suggestions } from './../../shared/models/suggestion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menue',
  templateUrl: './right-menue.component.html',
  styleUrls: ['./right-menue.component.scss']
})
export class RightMenueComponent implements OnInit {
  suggestions: Suggestion[] = suggestions;
  constructor() { }

  ngOnInit(): void {
  }

}
