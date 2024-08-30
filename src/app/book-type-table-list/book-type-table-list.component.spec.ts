import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTypeTableListComponent } from './book-type-table-list.component';

describe('BookTypeTableListComponent', () => {
  let component: BookTypeTableListComponent;
  let fixture: ComponentFixture<BookTypeTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookTypeTableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTypeTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
