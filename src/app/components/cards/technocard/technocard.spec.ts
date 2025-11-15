import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technocard } from './technocard';

describe('Technocard', () => {
  let component: Technocard;
  let fixture: ComponentFixture<Technocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
