import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BingoSquaresService } from './bingo-squares.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [BingoSquaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
