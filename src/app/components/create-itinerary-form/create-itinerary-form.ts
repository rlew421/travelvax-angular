import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItineraryService } from '../../services/itinerary';
import { Country } from '../../interfaces/country.interface';
import { Itinerary } from '../../interfaces/itinerary.interface';

@Component({
  selector: 'app-create-itinerary-form',
  imports: [FormsModule],
  templateUrl: './create-itinerary-form.html',
  styleUrl: './create-itinerary-form.css'
})
export class CreateItineraryFormComponent {
  @Input() countries: Country[] = [];
  @Output() itineraryCreated = new EventEmitter<Itinerary>();

  private itineraryService = inject(ItineraryService);

  itineraryName = '';
  selectedCountryId = '';

  createItinerary() {
    if (!this.itineraryName || !this.selectedCountryId) return;

    const body = {
      itinerary: {
        name: this.itineraryName,
        country_ids: [Number(this.selectedCountryId)]
      }
    };

    this.itineraryService.createItinerary(body).subscribe(itinerary => {
      this.itineraryCreated.emit(itinerary);
      this.itineraryName = '';
      this.selectedCountryId = '';
    });
  }
}
