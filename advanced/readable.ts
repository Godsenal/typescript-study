interface MyState {
  name: string;
  age: number;
}

type ReadOnly<T> = { readonly [K in keyof T]: T[K] };

type ReadOnlyMyState = ReadOnly<MyState>;

const myState: MyState = {
  name: 'lth',
  age: 24,
};
const readMyState: ReadOnlyMyState = {
  ...myState,
};

myState.name = 'other';
// readMyState.name = 'other';  // error

// partial 프로퍼티 제거
interface AllPartial {
  name?: string;
  age?: number;
}

type RemovePartial<T> = { [K in keyof T]-?: T[K] };

// partial이 없어지고 무조건으로 바뀜
const partialState: RemovePartial<AllPartial> = {
  name: 'hello',
  age: 24,
};
