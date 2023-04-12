import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRankingComponent } from './new-ranking.component';

describe('NewRankingComponent', () => {
  let component: NewRankingComponent;
  let fixture: ComponentFixture<NewRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
