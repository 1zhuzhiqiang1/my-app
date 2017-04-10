import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

import {Hero} from './hero/hero';
import {HeroService} from './hero/hero-service';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers:[HeroService]
})

export class AppComponent implements OnInit{

  constructor(private heroService:HeroService){}

  getHeros():void{
    this.heros = this.heroService.getHeros();
  }
  ngOnInit():void{
    this.getHeros();
  }

  title = 'Tour of Heroes';
  heros:Hero[];
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/