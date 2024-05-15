import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeService } from './home.service';
import { Genre } from '../shared/models/genre.model';
import { Concert } from '../shared/models/concert.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable, map, shareReplay, startWith, switchMap } from 'rxjs';

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
  initialConcerts$ = new Observable<Concert[]>();
  filteredConcerts$ = new Observable<Concert[]>();

  homeService = inject(HomeService);

  currentGenre = new FormControl(0);

  ngOnInit() {
    const data$ = this.homeService.getData().pipe(shareReplay());
    this.genres$ = data$.pipe(
      map((data) => data.genres.filter((genre) => genre.status))
    );
    this.initialConcerts$ = data$.pipe(map((data) => data.concerts));

    this.filteredConcerts$ = this.currentGenre.valueChanges.pipe(
      startWith(0),
      switchMap((genreId) =>
        genreId === 0
          ? this.initialConcerts$
          : this.initialConcerts$.pipe(
              map((concerts) =>
                concerts.filter((concert) => concert.genreId === genreId)
              )
            )
      )
    );
  }
}
