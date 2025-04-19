/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeacherService } from './teacher.service';

describe('Service: Teacher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherService]
    });
  });

  it('should ...', inject([TeacherService], (service: TeacherService) => {
    expect(service).toBeTruthy();
  }));
});
