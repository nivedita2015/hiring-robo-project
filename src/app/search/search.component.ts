import { Component, OnInit } from '@angular/core';
import { RoboAssistantService } from '../roboAssistant.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Robo } from '../Robo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

// @ViewChild('roboSearch') roboSearch;

export class SearchComponent implements OnInit {
  selectedRobo: Robo;
  searchResults: Robo[];
  searchText = '';
  displaySearchText = '';
  constructor(private roboAssistantService: RoboAssistantService, private router: Router, private route: ActivatedRoute) { }
  getRobos(): void {
    this.roboAssistantService
      .getAllRoboAssistants()
      .then(searchResults => {
        this.searchResults = searchResults;
        this.displaySearchText = ' Displaying all Robot Assistants.';
      });
  }
  ngOnInit(): void {
  }
  sendSearch(): void {
    this.roboAssistantService
      .getFilteredRoboAssistants(this.searchText)
      .then(searchResults => {
        this.searchResults = searchResults;
        if (searchResults.length === 0) {
          this.displaySearchText = 'No Results found.';
        } else {
          this.displaySearchText = 'Found ' + searchResults.length + ' results for ' + this.searchText;
        }
        this.searchText = '';
      });
  }
  onSelect(robo: Robo) {
    this.selectedRobo = robo;
  }
  getRoboDetail(robo: Robo): void {
    this.selectedRobo = robo;
    this.router.navigate(['/detail', this.selectedRobo.robo_id]);
  }
}
