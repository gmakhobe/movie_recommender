import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearchResultsPage } from './movie-search-results.page';

describe('MovieSearchResultsPage', () => {
  let component: MovieSearchResultsPage;
  let fixture: ComponentFixture<MovieSearchResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
