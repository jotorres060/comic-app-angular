import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  public heroes: Heroe[] = [];
  public texto: string;

  constructor(
    private actRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      this.texto = this.actRoute.snapshot.params.texto;
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
    });
  }
}
