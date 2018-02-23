import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Enter A New Animal</h1>
   <div>
     <label>Enter Animal Species:</label>
     <input #newSpecies> <br>
     <label>Enter Animal Name:</label>
       <input #newName> <br>
     <label>Enter Animal Age:</label>
       <input #newAge> <br>
     <label>Enter Animal Diet:</label>
       <input #newDiet>
     <label>Enter Animal Location:</label>
       <input #newLocation>
     <label>Enter Animal Caretakers:</label>
       <input #newCaretakers>
     <label>Enter Animal Sex:</label>
       <input #newSex>
     <label>Enter Animal Likes:</label>
       <input #newLikes>
     <label>Enter Animal Dislikes:</label>
       <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
    newSpecies.value='';
    newName.value='';
    newAge.value='';
    newDiet.value='';
    newLocation.value='';
    newCaretakers.value='';
    newSex.value='';
    newLikes.value='';
    newDislikes.value='';
    ">Add</button>
  </div>
  `
})

export class NewBrewComponent {
  @Output() newBrewSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newBrewToAdd: Brew = new Brew(name, brand, price, alcoholContent);
    this.newBrewSender.emit(newBrewToAdd);
  }
}
