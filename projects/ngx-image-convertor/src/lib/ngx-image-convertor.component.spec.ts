import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageConvertorComponent } from './ngx-image-convertor.component';

describe('NgxImageConvertorComponent', () => {
  let component: NgxImageConvertorComponent;
  let fixture: ComponentFixture<NgxImageConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
