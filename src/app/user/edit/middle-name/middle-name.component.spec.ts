import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleNameComponent } from './middle-name.component';

describe('MiddleNameComponent', () => {
  let component: MiddleNameComponent;
  let fixture: ComponentFixture<MiddleNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
