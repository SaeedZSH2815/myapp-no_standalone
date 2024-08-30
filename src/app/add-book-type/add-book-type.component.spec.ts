import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookTypeComponent } from './add-book-type.component';

describe('AddBookTypeComponent', () => {
  let component: AddBookTypeComponent;
  let fixture: ComponentFixture<AddBookTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
