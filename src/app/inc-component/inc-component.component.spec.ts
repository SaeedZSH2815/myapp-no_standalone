import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncComponentComponent } from './inc-component.component';

describe('IncComponentComponent', () => {
  let component: IncComponentComponent;
  let fixture: ComponentFixture<IncComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
