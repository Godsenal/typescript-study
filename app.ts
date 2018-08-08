import { Category } from "./enums";
import { Developer } from "./interfaces";

/* Simple types example */
function getAllDevelopers(): Developer[] {
  const developers: Developer[] = [
    { id: 0, name: "James", skill: Category.Angular, age: 24 },
    { id: 1, name: "John", skill: Category.React },
    { id: 2, name: "Max", skill: Category.Angular, age: 36 },
    { id: 3, name: "Ryan", skill: Category.Vue, age: 20 },
    { id: 4, name: "Merrill", skill: Category.Vue, age: 21 }
  ];
  return developers;
}

function isBelow(standard: number): Function {
  return (value: number): boolean => standard > value;
}
function findBySkill(developers: Developer[], skill: Category): Developer[] {
  return developers.filter(developer => developer.skill === skill);
}

function findByAgeLimit(developers: Developer[], limit: number): Developer[] {
  return developers.filter(
    developer => developer.age && isBelow(limit)(developer.age)
  );
}

function findById<T extends { id?: number }>(items: T[], id: number): T[] {
  return items.filter(item => item.id === id);
}

function consoleField(items: any[], field: string): void {
  items.map(item => console.log(item[field]));
}
const developers: Developer[] = getAllDevelopers();

const wantedSkill = Category.React;
console.info(`-- ${Category[wantedSkill]} Developers -- `);
consoleField(findBySkill(developers, wantedSkill), "name");

const wantedAge = 30;
console.info(`-- Developers under age ${wantedAge} -- `);
consoleField(findByAgeLimit(developers, wantedAge), "name");

const wantedId = 2;
console.info(`-- ID ${wantedId} developer -- `);
consoleField(findById<Developer>(developers, wantedId), "name");

/* Class example */
class CoDeveloper implements Developer {
  constructor(public id: number, public name: string, public skill: Category, public career: number, public age?: number ) {
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
  new CoDeveloper(id, name, skill, i, age);
  return ;
});

