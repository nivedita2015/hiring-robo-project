import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise'; // !!!!! NOTE: import this in any file you need to add `toPromise` to !!!!!
import { Robo, Reviews } from './Robo';

@Injectable()
export class RoboAssistantService {
  private headers = new Headers({'Authorization' : '58f7e017884edb320127f3ce' }); // Auth code from getToken API call response
  private robosUrl = 'http://robo.nyllab.com';
  private name = 'Nivedita Mittal';
  private email = 'mittal.ni@husky.neu.edu';

  constructor(private http: Http) {
  }
  // helloWorld(): Promise<string> {
  //
  //   // mock an asynchronous request:
  //   const mockAsyncRequest = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve('Hello World!'));
  //   });
  //   return mockAsyncRequest;
  // }

  // API fired once to get access to Auth Token.
  getToken() {
    // const url = `${this.robosUrl}/register`;
    return this.http.post('http://robo.nyllab.com/register', {name : this.name , email : this.email })
      .toPromise()
      .then(res => {
        localStorage.setItem('auth', res.json());
      });
  }

  // API call to get initial list of all Robos on landing page
  getAllRoboAssistants(): Promise<Robo[]> {
    return this.http.get(this.robosUrl + '/bots', {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Robo[])
      .catch(this.handleError);
  }

  // API call to get list of assistants which match the filter search parameter
  getFilteredRoboAssistants(filter: string) {
    const url = `${this.robosUrl}/bots/?filter=${filter}`
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Robo[]);
  }

  // API call to get details about selected robo assistant
  getRoboAssistant(robo_id: number): Promise<Robo> {
    const url = `${this.robosUrl}/bots/${robo_id}`;
    console.log(' calling ', url);
    return this.http.get(url, {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Robo)
      .catch(this.handleError);
  }

  // API call to get reviews about selected robo assistant
  getReviewsForRoboAssistant(id: string) {
    const url = `${this.robosUrl}/reviews/${id}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Reviews)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
