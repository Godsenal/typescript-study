// declare module 'module name'
// module name must have same string that we use for importing module.
// so below declare will be applied to
// import * as something from 'filter';
// but won't be applied to
// import * as something from './filter';

declare module 'filter' {
  export function filter<T>(arr: T[], callback: (item: T, i?: number) => boolean);
}