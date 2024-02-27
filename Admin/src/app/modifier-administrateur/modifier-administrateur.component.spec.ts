import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAdministrateurComponent } from './modifier-administrateur.component';

describe('ModifierAdministrateurComponent', () => {
  let component: ModifierAdministrateurComponent;
  let fixture: ComponentFixture<ModifierAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAdministrateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
