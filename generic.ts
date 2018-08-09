import { Developer } from './models/developer';
import { getAllDevelopers, consoleField } from './util';
/* Class example */

const developers = getAllDevelopers();

interface ItemWithId {
  id: number;
}

// generic extends 
function findById<T extends ItemWithId>(items: T[], id: number): T[] {
  return items.filter(item => item.id === id);
}

const wantedId = 2;
console.info(`-- ID ${wantedId} developer -- `);
consoleField(findById<Developer>(developers, wantedId), "name");