import { ComponentFixture, TestBed } from '@angular/core/testing';

import { It3mComponent } from './it3m.component';

describe('It3mComponent', () => {
  let component: It3mComponent;
  let fixture: ComponentFixture<It3mComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ It3mComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(It3mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
