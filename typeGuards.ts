// 1. Primitive Types
function primitiveGuard(value: string | number) {
  if (typeof value === 'string') {
    value.toLowerCase();
  }
  else {
    value.toString();
  }
}

// 2.instanceof
class Phone {
  callSomeone() { console.log('make call'); }
}
class Tablet {
  watchMovie() { console.log('watch movie'); }
}

const pablet = new Phone();
function instanceGuard(value: any) {
  if (value instanceof Phone) {
    value.callSomeone();
  }
}

// 3. Custom Guard
interface IDeveloper {
  name: string;
  coding: () => void;
}
interface IBaseballPlayer {
  name: string;
  play: () => void;
}

function isDeveloper(person: IDeveloper | IBaseballPlayer): person is IDeveloper {
  return (person as IDeveloper).coding !== undefined;
}

const person: IDeveloper = {
  name: 'lth',
  coding: () => console.log('coding...'),
};

console.log(isDeveloper(person));