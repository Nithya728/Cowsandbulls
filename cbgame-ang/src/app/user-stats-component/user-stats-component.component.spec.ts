import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsComponentComponent } from './user-stats-component.component';

describe('UserStatsComponentComponent', () => {
  let component: UserStatsComponentComponent;
  let fixture: ComponentFixture<UserStatsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStatsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
