import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseTwoComponent } from './switch-case-two.component';

describe('SwitchCaseTwoComponent', () => {
  let component: SwitchCaseTwoComponent;
  let fixture: ComponentFixture<SwitchCaseTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchCaseTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
