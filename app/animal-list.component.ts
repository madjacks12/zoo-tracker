import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Young Animals</option>
        <option value="matureAnimals" >Mature Animals</option>
      </select>
      <ul id = "ul-column">
        <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"><strong>Species:</strong> {{currentAnimal.species}} <br> <strong>Name:</strong> {{currentAnimal.name}}<br> <strong>Age:</strong> {{currentAnimal.age}} <br> <strong>Diet:</strong> {{currentAnimal.diet}} <br><strong>Location:</strong> {{currentAnimal.location}}<br> <strong># of Caretakers:</strong> {{currentAnimal.caretakers}}<br> <strong>Sex:</strong> {{currentAnimal.sex}} <br> <strong>Animal likes:</strong> {{currentAnimal.likes}}<br> <strong>Animal dislikes:</strong> {{currentAnimal.dislikes}} <br>
          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </li><br>
      </ul>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "age";

  editButtonHasBeenClicked(animalToEdit: Animal) {
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
