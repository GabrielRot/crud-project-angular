import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersForm } from './providers-form';

describe('ProvidersForm', () => {
  let component: ProvidersForm;
  let fixture: ComponentFixture<ProvidersForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
