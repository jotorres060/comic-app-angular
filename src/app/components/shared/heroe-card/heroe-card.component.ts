import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {
  @Input() public heroe: any = {};
  @Input() public idx: number;

  constructor() { }

  ngOnInit(): void {
  }
}
