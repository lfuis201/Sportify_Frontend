import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederacionesListComponent } from './federaciones-list.component';

describe('FederacionesListComponent', () => {
  let component: FederacionesListComponent;
  let fixture: ComponentFixture<FederacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FederacionesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FederacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
