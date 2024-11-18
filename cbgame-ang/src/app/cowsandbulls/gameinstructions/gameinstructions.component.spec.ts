import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameinstructionsComponent } from './gameinstructions.component';

describe('GameinstructionsComponent', () => {
  let component: GameinstructionsComponent;
  let fixture: ComponentFixture<GameinstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameinstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
