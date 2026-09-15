import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Itinerary } from '../../interfaces/itinerary.interface';

@Component({
  selector: 'app-itinerary-card',
  imports: [RouterLink],
  templateUrl: './itinerary-card.html',
  styleUrl: './itinerary-card.css'
})
export class ItineraryCardComponent implements OnInit {
  @Input() itinerary!: Itinerary;

  stockImgs = [
    '/images/hot_air_balloon.jpg',
    '/images/green_landscape.jpg',
    '/images/boat.jpg',
    '/images/fuji.jpg',
    '/images/rice_field.jpg',
    '/images/hawaii.jpg',
    '/images/peru.jpg',
    '/images/yellow_mountain.jpg',
    '/images/india.jpg',
    '/images/colorful_street.jpg',
    '/images/green_cliffs.jpg',
    '/images/sunrise_temple.jpg',
    '/images/icy_mountain.jpg',
    '/images/canal.jpg',
  ];

  randomImg = '';

  ngOnInit() {
    this.randomImg = this.stockImgs[Math.floor(Math.random() * this.stockImgs.length)];
  }

  get countryNames(): string {
    return this.itinerary.countries.map(c => c.name).join(', ');
  }
}
