import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItineraryService } from '../../services/itinerary';
import { Itinerary } from '../../interfaces/itinerary.interface';

@Component({
  selector: 'app-itinerary-show',
  imports: [],
  templateUrl: './itinerary-show.html',
  styleUrl: './itinerary-show.css'
})
export class ItineraryShowComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private itineraryService = inject(ItineraryService);
  private cdr = inject(ChangeDetectorRef);

  itinerary: Itinerary | null = null;
  loading = true;

  routineVaccines = [
    'Hib', 'Hepatitis A', 'Hepatitis B', 'HPV', 'Influenza',
    'MMR', 'Meningococcal Disease', 'Monkeypox', 'Pneumococcal',
    'Polio', 'RSV', 'Tdap', 'Chickenpox', 'Shingles'
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.itineraryService.getItinerary(Number(id)).subscribe(data => {
        this.itinerary = data;
        this.loading = false;
        this.cdr.detectChanges();
      });
    }
  }
}
