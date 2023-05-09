import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { LoggerService } from '../logger.service'

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
   }

  constructor(private logger: LoggerService) { }
}
