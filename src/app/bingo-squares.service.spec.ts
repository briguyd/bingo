/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BingoSquaresService } from './bingo-squares.service';

describe('BingoSquaresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BingoSquaresService]
    });
  });

  it('should ...', inject([BingoSquaresService], (service: BingoSquaresService) => {
    expect(service).toBeTruthy();
  }));
});
