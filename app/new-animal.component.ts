import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Enter A New Animal</h1>
   <div class="new-form">
      <div class="form-col-1">
        <label>Enter Animal Species:</label>
        <input #newSpecies><br>
       <label>Enter Animal Name:</label>
         <input #newName><br>
       <label>Enter Animal Age:</label>
         <input #newAge><br>
       <label>Enter Animal Diet:</label>
         <input #newDiet><br>
       <label>Enter Animal Location:</label>
         <input #newLocation><br>
     </div>
     <div class="form-col-2">
       <label>Enter Animal Caretakers:</label>
        <input #newCaretakers><br>
       <label>Enter Animal Sex:</label>
        <input #newSex><br>
       <label>Enter Animal Likes:</label>
        <input #newLikes><br>
       <label>Enter Animal Dislikes:</label>
        <input #newDislikes><br>
      </div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
    newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value='';
    newLocation.value=''; newCaretakers.value=''; newSex.value='';  newLikes.value=''; newDislikes.value=''; ">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, namne: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
