import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameguessComponent } from './gameguess.component';


describe('GameguessComponent', () => {
  let component: GameguessComponent;
  let fixture: ComponentFixture<GameguessComponent>;
 

  
    
  beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [GameguessComponent]
        })
        .compileComponents();
    
        fixture = TestBed.createComponent(GameguessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });