import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-new-releses-page',
  templateUrl: './new-releses-page.component.html',
  styleUrls: ['./new-releses-page.component.css']
})
export class NewRelesesPageComponent implements OnInit {

  constructor(private _spotify : SpotifyService) { }

  newReleases: any[] = [];

  ngOnInit(): void {
    this.getNewReleases();
  }


  getNewReleases() {
    this._spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data.albums.items
      }
    )
  }

}
