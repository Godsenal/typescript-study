import { Developer, Skill } from './models/developer';

const maybeDeveloper = {
  id: 1,
  name: 'LTH',
  skill: Skill.React,
  age: 24,
};
function coding(developer: Developer) {
  console.log(`${developer.name} is coding!`);
}
coding(maybeDeveloper); 

// example of duck typing.
// even if some vairble doesn't have type, if it has shape of that type, it can be used as typed.