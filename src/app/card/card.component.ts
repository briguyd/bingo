import { Square } from './../square';
import { BingoSquaresService } from './../bingo-squares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  squares: Square[];
  
  constructor(private bingoSquaresService: BingoSquaresService) { }

  ngOnInit() {
    this.squares = this.bingoSquaresService.getRandomSquares(24);
    console.log(this.squares.length);
  }

}
