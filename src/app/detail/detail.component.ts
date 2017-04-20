import {Component, OnInit} from '@angular/core';
import { RoboAssistantService } from '../roboAssistant.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Robo, Reviews, ReviewObj } from '../Robo';
import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  robo: Robo;
  reviews: ReviewObj[];
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
      .then(reviews => { this.reviews = reviews.content; console.log(this.reviews); });
  }

}
