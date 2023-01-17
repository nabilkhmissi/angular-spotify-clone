import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRelesesPageComponent } from './new-releses-page.component';

describe('NewRelesesPageComponent', () => {
  let component: NewRelesesPageComponent;
  let fixture: ComponentFixture<NewRelesesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRelesesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRelesesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
