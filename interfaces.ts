// See interfaces.js
// There is nothing.
// That means, interface is only used for typescript compiler.
import { Category } from './enums';

export interface Developer {
  id: number;
  name: string;
  age?: number;
  skill: Category;
};
