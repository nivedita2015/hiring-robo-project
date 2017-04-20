export class Robo {
  robo_id: string;
  name: string;
  model: string; // double check model
  price: number;
  avatar: string;
  reviews: string;  // double check data models.
}

export class ReviewObj {
rating: number;
review: string;
}

export class Reviews {
  content: ReviewObj[];
}

