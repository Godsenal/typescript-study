import { Developer, Skill } from './models/developer';

export function getAllDevelopers(): Developer[] {
  const developers: Developer[] = [
    { id: 0, name: "James", skill: Skill.Angular, age: 24 },
    { id: 1, name: "John", skill: Skill.React },
    { id: 2, name: "Max", skill: Skill.Angular, age: 36 },
    { id: 3, name: "Ryan", skill: Skill.Vue, age: 20 },
    { id: 4, name: "Merrill", skill: Skill.Vue, age: 21 }
  ];
  return developers;
}

export function consoleField(items: any[], field: string): void {
  items.map(item => console.log(item[field]));
}