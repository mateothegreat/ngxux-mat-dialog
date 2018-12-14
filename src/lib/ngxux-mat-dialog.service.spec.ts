import { TestBed } from '@angular/core/testing';

import { NgxuxMatDialogService } from './ngxux-mat-dialog.service';

describe('NgxuxMatDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMatDialogService = TestBed.get(NgxuxMatDialogService);
    expect(service).toBeTruthy();
  });
});
