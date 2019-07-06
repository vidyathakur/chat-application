import { TestBed, async, inject } from '@angular/core/testing';

import { ChatRoutGuardGuard } from './chat-rout-guard.guard';

describe('ChatRoutGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatRoutGuardGuard]
    });
  });

  it('should ...', inject([ChatRoutGuardGuard], (guard: ChatRoutGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
