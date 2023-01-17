import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPlaylistComponent } from './category-playlist.component';

describe('CategoryPlaylistComponent', () => {
  let component: CategoryPlaylistComponent;
  let fixture: ComponentFixture<CategoryPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
