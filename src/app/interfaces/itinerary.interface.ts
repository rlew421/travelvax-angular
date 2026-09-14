import { Country } from './country.interface';
import { Vaccine } from './vaccine.interface';

export interface Itinerary {
  id: number;
  name: string;
  countries: Country[];
  recommendations: Vaccine[];
}
