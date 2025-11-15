import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoButton } from './techno-button';

describe('TechnoButton', () => {
  let component: TechnoButton;
  let fixture: ComponentFixture<TechnoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
