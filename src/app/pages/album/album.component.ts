import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private _spotify: SpotifyService) { }

  album!: any;
  albumId!: string;
  tracks: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paraMap: ParamMap) => {
        this.albumId = paraMap.get('albumId')!;
      }
    )
    this.getAlbum(this.albumId);
    this.getTrucksByAlbum(this.albumId);
  }

  getAlbum(albumId: string) {
    this._spotify.getAlbum(albumId).subscribe(
      (data: any) => {
        this.album = data
        console.log(this.album)
      }
    )
  }

  getTrucksByAlbum(albumId: string) {
    this._spotify.getTrucksByAlbum(albumId).subscribe(
      (data: any) => {
        this.tracks = data.items;
      }
    )
  }

}
