import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchArtistsComponent } from './pages/search-artists/search-artists.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { AlbumComponent } from './pages/album/album.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { NewRelesesPageComponent } from './pages/new-releses-page/new-releses-page.component';
import { TracksByCategoryComponent } from './pages/tracks-by-category/tracks-by-category.component';
import { CategoryPlaylistComponent } from './pages/category-playlist/category-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchArtistsComponent,
    HeaderComponent,
    ArtistPageComponent,
    AlbumComponent,
    AllCategoriesComponent,
    NewRelesesPageComponent,
    TracksByCategoryComponent,
    CategoryPlaylistComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
