import { Suggestion } from './../models/suggestion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  @Input('suggest') suggest: Suggestion;
  constructor() { }

  ngOnInit(): void {
  }

}
