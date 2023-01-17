import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-tracks-by-category',
  templateUrl: './tracks-by-category.component.html',
  styleUrls: ['./tracks-by-category.component.css']
})
export class TracksByCategoryComponent implements OnInit {

  constructor(private _spotify: SpotifyService,
    private activatedRoute: ActivatedRoute) { }

  category_id!: string;
  playlists : any;
  category: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.category_id = paramMap.get('category_id')!;
      })
    this._spotify.getTracksByGategory(this.category_id).subscribe(
      (data: any) => {
        this.category = data;
        console.log(data)
      }
    )
    this.getCatgeoryPlaylist(this.category_id);
  }

  getCatgeoryPlaylist(category_id: string) {
    this._spotify.getCategoryPlaylists(category_id).subscribe(
      (data: any) => {
        this.playlists = data.playlists.items;
      }
    )
  }

}
