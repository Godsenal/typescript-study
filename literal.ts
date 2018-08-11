let state: 'LOADING' | 'SUCCESS' = 'LOADING';
state = 'SUCCESS';
// state = 'FAILURE'; error

let str: 'LOADING' | 'SUCCESS' | 'FAILURE' = 'LOADING';
// too long
type State = 'LOADING' | 'SUCCESS' | 'FAILURE';
let typed: State = 'LOADING';
