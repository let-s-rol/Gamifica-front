import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRankingListComponent } from './teacher-ranking-list.component';

describe('TeacherRankingListComponent', () => {
  let component: TeacherRankingListComponent;
  let fixture: ComponentFixture<TeacherRankingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRankingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherRankingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
