import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPetComponent } from './found-pet.component';

describe('FoundPetComponent', () => {
  let component: FoundPetComponent;
  let fixture: ComponentFixture<FoundPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
