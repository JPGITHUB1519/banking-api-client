import { greeting } from './external';
import "../main.css"

greeting();

const variable = 'World';
console.log(`Hello ${variable}`);


class Person {
  constructor() {
    this.name = 'jean';
  }
}

const object = new Person();
console.log(object.name);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log(json);
  });


