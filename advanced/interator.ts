// es6의 iterator를 사용해보자.

interface Action {
  type: string;
}

interface ListNode<T> {
  value: T;
  prev?: ListNode<T>;
  next?: ListNode<T>;
}

const action1: Action = { type: 'action1' };
const action2: Action = { type: 'action2' };
const action3: Action = { type: 'action3' };
const action4: Action = { type: 'action4' };

const actionNode1: ListNode<Action> = {
  value: action1,
  prev: undefined,
  next: undefined,
};
const actionNode2: ListNode<Action> = {
  value: action2,
  prev: actionNode1
  next: undefined,
};
actionNode1.next = actionNode2;
const actionNode3: ListNode<Action> = {
  value: action3,
  prev: actionNode2,
  next: undefined,
};
actionNode2.next = actionNode3;
const actionNode4: ListNode<Action> = {
  value: action4,
  prev: actionNode3,
  next: undefined
};
actionNode3.next = actionNode4;

class BackIterator implements IterableIterator<Action> {
  constructor(private _currentActionNode?: ListNode<Action>) {}
  public [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }
  public next(value?: any): IteratorResult<Action> {
    const curr = this._currentActionNode;
    if (!curr || !curr.value) {
      return { value: null, done: true};
    }
    // list에 있는 아이템을 따라 이동( prev 따라서 )
    this._currentActionNode = curr.prev;
    // 그 값반환
    return { value: curr.value, done: false};
  }
}

const backIterator = new BackIterator(actionNode4);

for (const action of backIterator) {
  console.log(action.type);
}