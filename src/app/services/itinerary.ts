import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itinerary } from '../interfaces/itinerary.interface';
import { environment } from '../../environments/environment';

export interface PostItineraryBody {
  itinerary: {
    name: string;
    country_ids: number[];
  };
}

@Service()
export class ItineraryService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(`${this.apiUrl}/api/v1/itineraries`);
  }

  getItinerary(id: number): Observable<Itinerary> {
    return this.http.get<Itinerary>(`${this.apiUrl}/api/v1/itineraries/${id}`);
  }

  createItinerary(body: PostItineraryBody): Observable<Itinerary> {
    return this.http.post<Itinerary>(`${this.apiUrl}/api/v1/itineraries`, body);
  }
}
