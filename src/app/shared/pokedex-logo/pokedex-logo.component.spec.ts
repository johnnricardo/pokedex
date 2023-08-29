import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexLogoComponent } from './pokedex-logo.component';

describe('PokedexLogoComponent', () => {
  let component: PokedexLogoComponent;
  let fixture: ComponentFixture<PokedexLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexLogoComponent]
    });
    fixture = TestBed.createComponent(PokedexLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
