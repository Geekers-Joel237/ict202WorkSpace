import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangagesListComponent } from './langages-list.component';

describe('LangagesListComponent', () => {
  let component: LangagesListComponent;
  let fixture: ComponentFixture<LangagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});