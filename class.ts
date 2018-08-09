import { Developer, Skill } from "./models/developer";
import { getAllDevelopers } from './util';

/* Class example */

const developers = getAllDevelopers();

// class can implements interface.
class Worker implements Developer {
  // if constructor has public paramter, it works same with
  // id: number
  // constructor(id: number) {
  //  this.id = id;
  // };
  constructor(public id: number, public name: string, public skill: Skill, public career: number, public age?: number ) {
    this.printInfo();
    setInterval(() => {
      console.log('After a year...');
      this.updateYear();
      this.printInfo();
    }, 3000);
  }
  get class(): string {
    if (this.career > 5) {
      return 'senior';
    }
    return 'junior';
  }
  get salary(): number {
    return this.career * 1000;
  }
  printInfo() {
    console.log(`-- Hello. ${this.name}! Your salary is ${this.salary}. And your ${this.class} Developer! --`);
  }
  updateYear() {
    ++this.career;
  }
}
developers.map((developer, i) => {
  const { id, name, skill, age } = developer;
  new Worker(id, name, skill, i, age);
  return ;
});

// class can be used as a type.

class Animal {
  constructor(public name: string) {}
}
class Dog extends Animal {
  constructor() {
    super(name); // should have same constructor property with parent.
  }
}
// both parent type and child type can be used.
const man: Animal = new Dog();