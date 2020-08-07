import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconfTypeaheadComponent } from './ngconf-typeahead.component';

describe('NgconfTypeaheadComponent', () => {
  let component: NgconfTypeaheadComponent;
  let fixture: ComponentFixture<NgconfTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgconfTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconfTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
