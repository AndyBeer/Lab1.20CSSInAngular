import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    new Country("Shrekadonia", "English", "assets/images/shrek.jpg", "Shrek", ["green", "brown", "grey"]),
    new Country("Icantastan", "Icantaneese", "assets/images/hamburger.png", "Jim", ["yellow", "chartreuse", "aquamarine"]),
    new Country("Roman Empire", "Latin", "assets/images/sealRome.png", "Julius Caesar", ["red", "yellow", "darkred"])
  ];

}
