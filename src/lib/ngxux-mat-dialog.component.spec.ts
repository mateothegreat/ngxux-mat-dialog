import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMatDialogComponent } from './ngxux-mat-dialog.component';

describe('NgxuxMatDialogComponent', () => {
  let component: NgxuxMatDialogComponent;
  let fixture: ComponentFixture<NgxuxMatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
