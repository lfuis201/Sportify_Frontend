import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederacionesFormComponent } from './federaciones-form.component';

describe('FederacionesFormComponent', () => {
  let component: FederacionesFormComponent;
  let fixture: ComponentFixture<FederacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FederacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FederacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
