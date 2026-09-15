import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItineraryCard } from './itinerary-card';

describe('ItineraryCard', () => {
  let component: ItineraryCard;
  let fixture: ComponentFixture<ItineraryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ItineraryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
