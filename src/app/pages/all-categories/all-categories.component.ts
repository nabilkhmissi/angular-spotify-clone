import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  constructor(private _spotify : SpotifyService) { }

  categories: any[] = [];
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._spotify.getCategories().subscribe(
      (data: any) => {
        this.categories = data.categories.items
      }
    )
  }
}
