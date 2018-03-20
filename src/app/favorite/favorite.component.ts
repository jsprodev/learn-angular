import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template:
    `
      <div>
        <p [style.background-color]="isFavorite ? 'yellow' :  'grey'"  (click)="toggleFavorite()"> Hello World</p>
      </div>
    `,
  styles: [
    `
    p {
      font-size: 20px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})

export class FavoriteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isFavorite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('custom-event') customEventO = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.customEventO.emit({ value: this.isFavorite });
  }

}

export interface IFavoriteObject {
  value: boolean;
}
