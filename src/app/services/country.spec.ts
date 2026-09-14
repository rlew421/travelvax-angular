import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CountryService } from './country';
import { environment } from '../../environments/environment';

describe('CountryService', () => {
  let service: CountryService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CountryService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all countries', () => {
    const mockCountries = [
      { id: '1', name: 'Japan' },
      { id: '2', name: 'Peru' }
    ];

    service.getCountries().subscribe(countries => {
      expect(countries.length).toBe(2);
      expect(countries[0].name).toBe('Japan');
    });

    const req = httpTesting.expectOne(`${environment.apiUrl}/api/v1/countries`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCountries);
  });
});
