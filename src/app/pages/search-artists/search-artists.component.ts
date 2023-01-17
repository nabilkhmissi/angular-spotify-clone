import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css']
})
export class SearchArtistsComponent implements OnInit {

  constructor(private _spotify: SpotifyService) { }

  artists: any[] = [];
  searchQuery = '';
  ngOnInit(): void {
  }

  getArtists() {
    this.artists = [];
    this._spotify.getAllArtists(this.searchQuery).subscribe(
      (data: any) => {
        this.artists = data.artists.items;
      }
    )
  }

}
