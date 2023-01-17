import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-category-playlist',
  templateUrl: './category-playlist.component.html',
  styleUrls: ['./category-playlist.component.css']
})
export class CategoryPlaylistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private _spotify: SpotifyService) { }

  playlistTracks: any;
  playlist: any;

  playlist_id!: string;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.playlist_id = paramMap.get('playlist_id')!;
      })
    this._spotify.getPlaylist(this.playlist_id).subscribe(
      (data: any) => {
        this.playlist = data;
      }
    )
    this.getPlaylistTracks(this.playlist_id);
  }

  getPlaylistTracks(playlist_id: string) {
    this._spotify.getPlaylistTracks(playlist_id).subscribe(
      (data : any) => {
        this.playlistTracks = data.items
      }
    )
  }

}
