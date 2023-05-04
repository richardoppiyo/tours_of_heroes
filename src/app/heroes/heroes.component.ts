import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes = HEROES ;
  
  selectedHero?:Hero; //This is a ternary operator that assign nothing at the begining and a selectged hero when the function is invoke

  //This is an arrow function that gets executed. Pass the hero 
  onSelect = (hero: Hero): void => {
  this.selectedHero = hero;
}

}

