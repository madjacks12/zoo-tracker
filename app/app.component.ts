import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap List For {{month}}/{{day}}/{{year}}</h1>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newBAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal [] = [
    new Animal('Giraffe', 'Tim', 6, "leaves", "Desert", 2, "Male", "Playing", "Loud noises"),
    new Animal('Cheetah', 'Bruce', 1, "zebra meat", "northern trail",1, "Female", "running", "Elephants"),
    new Animal('Zebra', 'Steve', 2, "grass", "southern trail", 3, "Female", "friends", "people")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
  this.masterBrewList.push(newAnimalFromChild);
}

}
