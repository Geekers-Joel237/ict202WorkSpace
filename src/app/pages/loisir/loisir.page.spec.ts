import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoisirPage } from './loisir.page';

describe('LoisirPage', () => {
  let component: LoisirPage;
  let fixture: ComponentFixture<LoisirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoisirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoisirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
