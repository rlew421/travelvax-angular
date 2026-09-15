import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateItineraryForm } from './create-itinerary-form';

describe('CreateItineraryForm', () => {
  let component: CreateItineraryForm;
  let fixture: ComponentFixture<CreateItineraryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateItineraryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItineraryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
