import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesListComponent } from './instalaciones-list.component';

describe('InstalacionesListComponent', () => {
  let component: InstalacionesListComponent;
  let fixture: ComponentFixture<InstalacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
