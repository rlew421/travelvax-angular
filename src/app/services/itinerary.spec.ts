import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ItineraryService } from './itinerary';
import { environment } from '../../environments/environment';

describe('ItineraryService', () => {
  let service: ItineraryService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ItineraryService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all itineraries', () => {
    const mockItineraries = [
      { id: 1, name: 'Japan Trip', countries: [], recommendations: [] },
      { id: 2, name: 'Peru Trip', countries: [], recommendations: [] }
    ];

    service.getItineraries().subscribe(itineraries => {
      expect(itineraries.length).toBe(2);
      expect(itineraries[0].name).toBe('Japan Trip');
    });

    const req = httpTesting.expectOne(`${environment.apiUrl}/api/v1/itineraries`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItineraries);
  });

  it('should GET a single itinerary by id', () => {
    const mockItinerary = { id: 1, name: 'Japan Trip', countries: [], recommendations: [] };

    service.getItinerary(1).subscribe(itinerary => {
      expect(itinerary.name).toBe('Japan Trip');
    });

    const req = httpTesting.expectOne(`${environment.apiUrl}/api/v1/itineraries/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItinerary);
  });

  it('should POST a new itinerary', () => {
    const mockBody = { itinerary: { name: 'Japan Trip', country_ids: [1] } };
    const mockResponse = { id: 1, name: 'Japan Trip', countries: [], recommendations: [] };

    service.createItinerary(mockBody).subscribe(itinerary => {
      expect(itinerary.name).toBe('Japan Trip');
    });

    const req = httpTesting.expectOne(`${environment.apiUrl}/api/v1/itineraries`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
