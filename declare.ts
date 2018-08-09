/// <reference path="types/index.d.ts" />
// reference filter type declaration file.

import { filter } from 'filter';

const arr = ['I', 'Want', 'Remove', 'This!'];

const newArr = filter(arr, item => item !== 'This!');
console.log(newArr);