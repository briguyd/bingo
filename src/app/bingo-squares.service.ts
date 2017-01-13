import { SQUARES } from './mock-squares';
import { Square } from './square';
import { Injectable } from '@angular/core';

@Injectable()
export class BingoSquaresService {

  constructor() { }

  getSquares(): Square[] {
    return SQUARES;
  }

  getRandomSquares(count: number): Square[] {
    var shuffled = SQUARES.slice(0), i = SQUARES.length, temp, index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, count);
  }
}
