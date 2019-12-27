import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchLeadsComponent } from './lunch-leads.component';

describe('LunchLeadsComponent', () => {
  let component: LunchLeadsComponent;
  let fixture: ComponentFixture<LunchLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
