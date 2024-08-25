import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseOneComponent } from './switch-case-one.component';

describe('SwitchCaseOneComponent', () => {
  let component: SwitchCaseOneComponent;
  let fixture: ComponentFixture<SwitchCaseOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchCaseOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
