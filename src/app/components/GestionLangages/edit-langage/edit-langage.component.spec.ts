import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLangageComponent } from './edit-langage.component';

describe('EditLangageComponent', () => {
  let component: EditLangageComponent;
  let fixture: ComponentFixture<EditLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLangageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
