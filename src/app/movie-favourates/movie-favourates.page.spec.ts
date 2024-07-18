import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFavouratesPage } from './movie-favourates.page';

describe('MovieFavouratesPage', () => {
  let component: MovieFavouratesPage;
  let fixture: ComponentFixture<MovieFavouratesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFavouratesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
