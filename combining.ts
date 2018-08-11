// Union type
let strnum: string | number = 'string first';
strnum = 10;
// strnum = false; error

// Intersection type
interface Developer {
  name: string;
  skill: string;
}
interface Employee {
  name: string;
  salary: number;
}

let lth: Developer & Employee = {
  name: 'LTH',
  skill: 'web',
  salary: 10000,
};


