import { Component, Input } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl:'app/detail/hero-detail.component.html'
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
