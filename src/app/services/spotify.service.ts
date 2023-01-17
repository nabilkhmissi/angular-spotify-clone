import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private authorizationKey = 'Authorization: Bearer BQDjx0OmH9gc7_5WnIOppC4oDuCFT9sKEU2tGhBEq3-pHNnmCeI2p6p5YWytUJPIGLJvaMAgzwDV7i9SFmQteB8BPvmh093vcE70A5vWeUC7DUFVZOTNPc3RK76pLegvXjjDQhzHLyEdS9Pb0wf7BEk4UMLkZawfJo_YLdZDJgAO9YO6qWuETMq-yrKvndQ';
  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  }

  constructor(private _http: HttpClient) { }

  getAllArtists(searchQuery: string) {
    let searchURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
    return this._http.get<any>(searchURL, this.httpOptions)
  }

  getArtist(artistId: any) {
    return this._http.get<any>(`https://api.spotify.com/v1/artists/${artistId}`, this.httpOptions)
  }

  getAlbumsByArtist(artistId: string) {
    return this._http.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, this.httpOptions)
  }

  getAlbum(albumId: string) {
    return this._http.get(`https://api.spotify.com/v1/albums/${albumId}`, this.httpOptions)
  }

  getTrucksByAlbum(albumId: string) {
    return this._http.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, this.httpOptions)
  }

  getNewReleases() {
    return this._http.get<any>(`https://api.spotify.com/v1/browse/new-releases`, this.httpOptions)
  }

  getCategories() {
    return this._http.get(`https://api.spotify.com/v1/browse/categories`, this.httpOptions)
  }

  getFeaturesd() {

    return this._http.get(`https://api.spotify.com/v1/browse/featured-playlists`, this.httpOptions)
  }

  getTracksByGategory(category_id: string) {
    return this._http.get(`https://api.spotify.com/v1/browse/categories/${category_id}`, this.httpOptions);
  }

  getCategoryPlaylists(category_id: string) {
    return this._http.get<any>(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, this.httpOptions);
  }

  getPlaylist(playlist_id: string) {
    return this._http.get<any>(`https://api.spotify.com/v1/playlists/${playlist_id}`, this.httpOptions);
  }

  getPlaylistTracks(playlist_id: string) {
    return this._http.get<any>(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, this.httpOptions);
  }

}
