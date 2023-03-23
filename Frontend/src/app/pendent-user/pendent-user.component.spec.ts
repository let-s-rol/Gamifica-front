import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendentUserComponent } from './pendent-user.component';

describe('PendentUserComponent', () => {
  let component: PendentUserComponent;
  let fixture: ComponentFixture<PendentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendentUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
