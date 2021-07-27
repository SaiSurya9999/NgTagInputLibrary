import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconfTaginputComponent } from './ngconf-taginput.component';

describe('NgconfTaginputComponent', () => {
  let component: NgconfTaginputComponent;
  let fixture: ComponentFixture<NgconfTaginputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgconfTaginputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconfTaginputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
