import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItineraryService } from '../../services/itinerary';
import { CountryService } from '../../services/country';
import { Itinerary } from '../../interfaces/itinerary.interface';
import { Country } from '../../interfaces/country.interface';
import { ItineraryCardComponent } from '../../components/itinerary-card/itinerary-card';
import { CreateItineraryFormComponent } from '../../components/create-itinerary-form/create-itinerary-form';

@Component({
  selector: 'app-itineraries',
  imports: [ItineraryCardComponent, CreateItineraryFormComponent],
  templateUrl: './itineraries.html',
  styleUrl: './itineraries.css'
})
export class ItinerariesComponent implements OnInit {
  private itineraryService = inject(ItineraryService);
  private countryService = inject(CountryService);

  itineraries: Itinerary[] = [];
  countries: Country[] = [];

  ngOnInit() {
    this.itineraryService.getItineraries().subscribe(data => {
      this.itineraries = data;
    });
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  addItinerary(itinerary: Itinerary) {
    this.itineraries = [...this.itineraries, itinerary];
  }
}
