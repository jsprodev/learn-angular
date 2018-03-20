import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  tasks = ['a', 'b', 'c'];
  person = {
    name: 'Jonathan Doe',
    age: 33,
    height: 5.11222,
    salary: 5000.123456,
    dated: new Date(2018,1,28)
  };
  text = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
    layout. Tution of letters opposed to using 'Content here, content here', making it look like readable English. 
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
    text, and a search for "lorem ipsum" will uncover many web sites still in their infancy
    Various versions have evolved over the years, sometime `;
  constructor() { }
  getTasks() {
    return this.tasks;
  } 
  getPerson() {
    return this.person;
  } 
  getText() {
    return this.text;
  }
}
