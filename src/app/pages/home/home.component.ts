import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _spotify: SpotifyService) { }

  newReleases: any = [];
  categories: any = [];
  featured: any[] = [];

  ngOnInit(): void {
    this.getNewReleases();
    this.getCategories();
    this.getFeatured();
  }



  getNewReleases() {
    this._spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data.albums.items
      }
    )
  }
  getCategories() {
    this._spotify.getCategories().subscribe(
      (data: any) => {
        this.categories = data.categories.items
      }
    )
  }
  getFeatured() {
    this._spotify.getFeaturesd().subscribe(
      (data: any) => {
        this.featured = data.playlists.items
        console.log(this.featured)
      }
    )
  }

}
