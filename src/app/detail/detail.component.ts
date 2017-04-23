import {Component, OnInit} from '@angular/core';
import { RoboAssistantService } from '../roboAssistant.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Robo, ReviewObj } from '../Robo';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  robo: Robo;
  reviews: ReviewObj[];
  avgRating: number[];
  searchText = '';
  constructor(private roboAssistantService: RoboAssistantService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    // debugger;
    this.route.params
      .switchMap((params: Params) => this.roboAssistantService.getRoboAssistant(params['robo_id']))
      .subscribe(robo => {
        this.robo = robo;
        this.getReviews(this.robo.reviews);
      });
  }
  getReviews(id: string): void {
    this.roboAssistantService
      .getReviewsForRoboAssistant(id)
      .then(reviews => {
        this.reviews = reviews.content;
        // for printing stars
        for (const i of this.reviews){
          const a = i.rating;
          i.stars = new Array(a);
        }
        this.calculateAverageRatings();
      });
  }
  calculateAverageRatings(): void {
    let count = 0, avg = 0;
    for (const item of this.reviews){
      count++; avg += item.rating;
    }
    avg = avg / count;
    this.avgRating = new Array(Math.round(avg));
    // this.sortReviews();
  }
  sortReviewsType(type: string): void {
    if ( type === 'desc') { this.sortReviews(1); }
    if (type === 'asc') { this.sortReviews(-1); }
  }
  sortReviews(comp: number): void {
    let sortedReviews: ReviewObj[];
    sortedReviews = this.reviews;
    sortedReviews.sort((leftside, rightside): number => {
      if (leftside.rating > rightside.rating) { return (comp * -1); }
      if (leftside.rating < rightside.rating) { return (comp); }
      return 0;
    });
    console.log(sortedReviews);
  }
}
