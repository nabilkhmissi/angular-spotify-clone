import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private _spotify: SpotifyService) { }

  artist: any = {};
  artistId!: string;
  albums: any[] = [];

  ngOnInit(): void {
    let id = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.artistId = paramMap.get('id')!;
      })
    this._spotify.getArtist(this.artistId).subscribe(
      (data: any) => {
        this.artist = data;
      }
    )
    this.getAlbumsByArtist(this.artistId);
  }

  getAlbumsByArtist(artistId: string) {
    this._spotify.getAlbumsByArtist(artistId).subscribe(
      (data: any) => {
        this.albums = data.items;
      }
    )
  }

}
