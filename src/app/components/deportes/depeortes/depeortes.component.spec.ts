import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepeortesComponent } from './depeortes.component';

describe('DepeortesComponent', () => {
  let component: DepeortesComponent;
  let fixture: ComponentFixture<DepeortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepeortesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepeortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
