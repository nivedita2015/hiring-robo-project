import { Component, OnInit } from '@angular/core';
import { RoboAssistantService } from '../roboAssistant.service';
import { Router } from '@angular/router';
import { Robo, Reviews } from '../Robo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

export class SearchComponent implements OnInit {
  // robos: Robo[]; // I think robos and Searchresults is same. Make sure to check
  selectedRobo: Robo;
  searchResults: Robo[]; // You can update the search results array as data is fetched.
  searchText = ''; // You can two-way bind this to the textbox input for searches

  constructor(private roboAssistantService: RoboAssistantService, private router: Router) { }

  // initial function to get all Robos and display on page.
  getRobos(): void {
    this.roboAssistantService
      .getAllRoboAssistants()
      .then(searchResults => this.searchResults = searchResults);
  }
  ngOnInit(): void {
    this.getRobos();
  }
  sendSearch(filter: string): void {
    this.roboAssistantService
      .getFilteredRoboAssistants(filter)
      .then(searchResults => this.searchResults = searchResults);
  }
  onSelect(robo: Robo) {
    this.selectedRobo = robo;
    // console.log('selected robo is ', this.selectedRobo);
  }
  getRoboDetail(robo: Robo): void {
    this.selectedRobo = robo;
    // console.log('selected robo is ', this.selectedRobo.robo_id);
    this.router.navigate(['/detail', this.selectedRobo.robo_id]);
  }
}
