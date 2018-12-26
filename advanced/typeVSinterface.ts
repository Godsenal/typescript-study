// 왠만한것은 다 상호 교차 가능하다.

type List = string[];
interface IList {
  [index: number]: string;
}
const list: List = ['a', 'b', 'c'];
const ilist: IList = list;

type Pet = {
  pose(): void;
};

interface IFeline {
  eye: number;
}

interface IDog extends Pet {}
interface ICat extends Pet, IFeline {}
type Cat = Pet & IFeline;

class CCat implements Pet, IFeline {
  public eye = 2;
  public pose() {
    console.log('pose');
  }
}

// 차이가 발생하는 지점이 있다.

type PetType = ICat | IDog;

// 유니온 타입은 extends 할 수 없다. class도 마찬가지
// interface IPet extends PetType {

// }

// interface 는 자동으로 merge된다.
interface Foo {
  a: string;
}
interface Foo {
  b: string;
}

let foo: Foo = { a: 'a', b: 'b' };

type Bar = {
  a: string;
};
// type Bar = {

// }
// 하지만 type은 안된다.

// 가장 중요한 점.
// typescript는 interface를 merge하기 때문에, 다른 패키지에서 interface를 지정해놔야지만 사용하는 유저가 확장할 수 있음.
// 예를 들어, jquery를 확장하고 싶다고 하면,

import * as $ from 'jquery';

$('test').myQuery();

// typing.d.ts를 보자. interface를 @types/jquery에서 지정해놓았기 때문에 내가 만든 interface가 merge될 수 있는것.
// 이러한 점에서는 type 대신 interface를 써야한다.
