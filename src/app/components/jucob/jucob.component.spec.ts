import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JucobComponent } from './jucob.component';

describe('JucobComponent', () => {
  let component: JucobComponent;
  let fixture: ComponentFixture<JucobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JucobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JucobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
