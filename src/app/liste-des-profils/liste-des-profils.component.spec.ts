import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesProfilsComponent } from './liste-des-profils.component';

describe('ListeDesProfilsComponent', () => {
  let component: ListeDesProfilsComponent;
  let fixture: ComponentFixture<ListeDesProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
