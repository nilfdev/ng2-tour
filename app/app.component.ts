import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  directives: [ HeroDetailComponent ],
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes = HEROES;
  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

let HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];