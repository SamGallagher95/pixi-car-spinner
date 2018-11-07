import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { PixiService } from './services/pixi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private api: ApiService, private pixi: PixiService) {}

  public ngOnInit() {
    this.api.getSpriteJson('brilliantSilver').then(data => {
      console.log(data);
    });
  }
}
