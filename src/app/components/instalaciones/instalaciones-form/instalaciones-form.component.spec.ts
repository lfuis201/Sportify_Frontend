import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesFormComponent } from './instalaciones-form.component';

describe('InstalacionesFormComponent', () => {
  let component: InstalacionesFormComponent;
  let fixture: ComponentFixture<InstalacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
