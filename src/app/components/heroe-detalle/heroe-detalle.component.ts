import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html'
})
export class HeroeDetalleComponent implements OnInit {
  public id: number;
  public heroe: Heroe;

  constructor(
    private _heroesService: HeroesService,
    private actRoute: ActivatedRoute
  ) {
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.heroe = this._heroesService.getHeroe(this.id);
  }
}
