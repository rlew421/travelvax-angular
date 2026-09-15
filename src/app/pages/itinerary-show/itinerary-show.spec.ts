import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItineraryShow } from './itinerary-show';

describe('ItineraryShow', () => {
  let component: ItineraryShow;
  let fixture: ComponentFixture<ItineraryShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryShow],
    }).compileComponents();

    fixture = TestBed.createComponent(ItineraryShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
