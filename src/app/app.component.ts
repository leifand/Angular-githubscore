import { Component } from '@angular/core';
import { GitApiService } from './git-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubscore';
  score :any = '';
  user :object = {};
  error_msg : string = '';

  constructor(private _api: GitApiService) {}

  onSubmit(user){
    this.error_msg = '';
    return this._api.getUser(user.username)
    .then(output => {
      console.log(output);
      this.score = output.public_repos + output.followers;})
    .catch(err => {
      console.log(err);
      this.error_msg="THERE IS NO NINJA WITH THAT USER NAME";})
    }
} // AppComponent
