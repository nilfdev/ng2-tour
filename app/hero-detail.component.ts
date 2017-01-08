import { Component, Input } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'


@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})


export class HeroDetailComponent {
   @Input() 
   hero: Hero;

   constructor(private heroService: HeroService) { }
}

