import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasTeacherComponent } from './tareas-teacher.component';

describe('TareasTeacherComponent', () => {
  let component: TareasTeacherComponent;
  let fixture: ComponentFixture<TareasTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
