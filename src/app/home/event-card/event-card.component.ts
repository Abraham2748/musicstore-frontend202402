import { Component, Input, OnInit, input } from '@angular/core';
import { Concert } from '../../shared/models/concert.model';
import { TextLimitPipe } from '../../shared/pipes/text-limit.pipe';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent implements OnInit {
  @Input({ required: true }) data!: Concert;

  ngOnInit() {
    if (!this.data.imageUrl) {
      this.data.imageUrl =
        'https://th.bing.com/th/id/OIP.OVaNiPfcNxfXkiN09-3IxQHaHa?rs=1&pid=ImgDetMain';
    }
  }
}
