import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { ItinerariesComponent } from './pages/itineraries/itineraries';
import { ItineraryShowComponent } from './pages/itinerary-show/itinerary-show';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'itineraries', component: ItinerariesComponent },
  { path: 'itineraries/:id', component: ItineraryShowComponent },
];
