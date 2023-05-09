import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../logger.service'
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  // getHeroes() {
  //   this.logger.log('Getting heroes ...');
  //   return HEROES;
  //  }

   getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor(private logger: LoggerService) { }
}
