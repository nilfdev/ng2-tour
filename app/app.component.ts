import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HeroService]
})


export class AppComponent implements OnInit {

  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}