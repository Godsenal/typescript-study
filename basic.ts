import { Developer, Skill } from './models/developer';
import { getAllDevelopers, consoleField } from './util';
/* Simple types example */

// currying for filter
function isBelow(standard: number): Function {
  return (value: number): boolean => standard > value;
}
function findBySkill(developers: Developer[], skill: Skill): Developer[] {
  return developers.filter(developer => developer.skill === skill);
}

// optional paramter
function findByAgeLimit(developers: Developer[], limit?: number): Developer[] {
  return developers.filter(
    developer => developer.age && isBelow(limit || 25)(developer.age)
  );
}

// rest paramter
function findBySkills(developer: Developer[], ...skills: Skill[]): Developer[] {
  return developers.filter(developer => skills.some(skill => skill === developer.skill));
}
const developers: Developer[] = getAllDevelopers();

const wantedSkill = Skill.React;
console.info(`-- ${Skill[wantedSkill]} Developers -- `);
consoleField(findBySkill(developers, wantedSkill), "name");

const wantedAge = 30;
console.info(`-- Developers under age ${wantedAge} -- `);
consoleField(findByAgeLimit(developers, wantedAge), "name");

const wantedSkills = [Skill.Angular, Skill.React];
console.info(`-- Developers whose name is one of ${Skill[wantedSkills[0]], Skill[wantedSkills[1]]}`);
consoleField(findBySkills(developers, wantedSkills[0], wantedSkills[1]), "name");