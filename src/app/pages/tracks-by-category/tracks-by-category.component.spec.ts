import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksByCategoryComponent } from './tracks-by-category.component';

describe('TracksByCategoryComponent', () => {
  let component: TracksByCategoryComponent;
  let fixture: ComponentFixture<TracksByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
