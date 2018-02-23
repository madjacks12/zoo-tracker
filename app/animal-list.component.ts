import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
        <option value="allAnimals">All Animals</option>
        <option value="youngAnimals">Young Animals</option>
        <option value="matureAnimals" selected="selected">Mature Animals</option>
      </select>
      <ul>
        <li *ngFor="let currentAnimals of childAnimalList | empty:filterByAges">{{currentAnimal.species}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}} <br>
          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </li>
      </ul>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "empty";

  editButtonHasBeenClicked(brewToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

ageColor(currentAnimal){
    if (currentAnimal.age > 2){
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

}
