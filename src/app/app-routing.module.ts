import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { CategoryPlaylistComponent } from './pages/category-playlist/category-playlist.component';
import { HomeComponent } from './pages/home/home.component';
import { NewRelesesPageComponent } from './pages/new-releses-page/new-releses-page.component';
import { SearchArtistsComponent } from './pages/search-artists/search-artists.component';
import { TracksByCategoryComponent } from './pages/tracks-by-category/tracks-by-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search-artists', component: SearchArtistsComponent },
  { path: 'artists/:id', component: ArtistPageComponent },
  { path: 'albums/:albumId', component: AlbumComponent },
  { path: 'categories', component: AllCategoriesComponent },
  { path: 'new-releases', component: NewRelesesPageComponent },
  { path: 'tracks-by-category/:category_id', component: TracksByCategoryComponent },
  { path: 'playlist/:playlist_id', component: CategoryPlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
