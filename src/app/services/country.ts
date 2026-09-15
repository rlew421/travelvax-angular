import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { environment } from '../../environments/environment';

@Service()
export class CountryService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/api/v1/countries`);
  }
}
