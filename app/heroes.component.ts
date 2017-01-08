import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
  providers: [HeroService]
})


export class HeroesComponent implements OnInit {

  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id])
  }
}