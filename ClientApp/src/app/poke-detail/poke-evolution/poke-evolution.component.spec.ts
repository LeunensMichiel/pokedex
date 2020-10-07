import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEvolutionComponent } from './poke-evolution.component';

describe('PokeEvolutionComponent', () => {
  let component: PokeEvolutionComponent;
  let fixture: ComponentFixture<PokeEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeEvolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
