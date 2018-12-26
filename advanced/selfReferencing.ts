// typescript는 self-referencing이 가능하다.

interface TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

let tree: TreeNode<string> = {
  value: 'a',
};
tree.left = {
  value: 'node2',
};

// 실 사용시 어디다 사용할 수 있을까?

// redux에서 action에 대한 linkedlist를 만들 수 있다.

interface LinkedList<T> {
  value: T;
  next: LinkedList<T>;
  prev: LinkedList<T>;
}

interface Action {
  type: string;
}

const action1: Action = { type: 'ADD_POST' };
const action2: Action = { type: 'DELETE_POST' };

// const actionNode1: LinkedList<Action> = {
//   value: action1,
//   prev: null,
//   next: null,
// };

// const actionNode2: LinkedList<Action> = {
//   value: action2,
//   prev: actionNode1,
//   next: null,
// };
