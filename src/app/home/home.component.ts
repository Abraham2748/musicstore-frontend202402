import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { HomeService } from './services/home.service';
import { Genre } from '../shared/models/genre.model';
import { Concert } from '../shared/models/concert.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  Observable,
  combineLatest,
  map,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs';
import { SearchBarService } from './services/search-bar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  genres$ = new Observable<Genre[]>();
  filteredConcerts$ = new Observable<Concert[]>();

  homeService = inject(HomeService);
  searchBarService = inject(SearchBarService);

  currentGenre = new FormControl(0);

  ngOnInit() {
    const data$ = this.homeService.getData().pipe(shareReplay(1));

    this.genres$ = data$.pipe(
      map((data) => data.genres.filter((genre) => genre.status))
    );

    const initialConcerts$ = data$.pipe(map((data) => data.concerts));

    const filterByGenre$ = this.currentGenre.valueChanges.pipe(
      startWith(0),
      switchMap((genreId) =>
        initialConcerts$.pipe(
          map((concerts) =>
            genreId === 0
              ? concerts
              : concerts.filter((concert) => concert.genreId === genreId)
          )
        )
      )
    );

    this.filteredConcerts$ = combineLatest([
      filterByGenre$,
      this.searchBarService.currentValue$,
    ]).pipe(
      map(([concerts, searchValue]) =>
        concerts.filter((concert) =>
          searchValue === ''
            ? true
            : concert.description
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        )
      )
    );
  }
}
