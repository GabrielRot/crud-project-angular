import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoInput } from './techno-input';

describe('TechnoInput', () => {
  let component: TechnoInput;
  let fixture: ComponentFixture<TechnoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnoInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
