import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes: Hero[] = [];

  getHeroes = (): void => {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  selectedHero?:Hero; //This is a ternary operator that assign nothing at the begining and a selectged hero when the function is invoke

  //This is an arrow function that gets executed. Pass the hero 
  onSelect = (hero: Hero): void => {
  this.selectedHero = hero;
}

constructor(private heroService: HeroService) {}
}
